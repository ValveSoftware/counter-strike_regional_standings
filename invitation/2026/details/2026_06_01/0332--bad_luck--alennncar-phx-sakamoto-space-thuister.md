### Roster Details<br />
Team Name: Bad Luck<br />
Roster: ALENNNCAR, phx, sakamoto, space, Thuister<br />
Global Rank: [332](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_06_01.md)<br />
Regional Rank: [86]( ../../standings_americas_2026_06_01.md)<br />
<br />
Final Rank Value:  501.9<br />
<br />
Final Rank Value (501.9) = Starting Rank Value (483.3) + Head To Head Adjustments (18.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.169[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.044<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 483.3
- 400 + ( ( 0.044 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 483.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |     3859 | 2026-03-01 | Vasco        | L   | 0.587      | -            | -                | -                | -         |    -1.82 | ALENNNCAR, phx, sakamoto, space, Thuister     |
|           10 |     3947 | 2026-02-27 | ALZON        | W   | 0.573      | 0.371        | 0.000 (0.000)    | 0.118 (0.025)    | 0 (0.000) |     9.36 | ALENNNCAR, phx, sakamoto, space, Thuister     |
|            9 |     4002 | 2026-02-26 | paiN Academy | L   | 0.567      | -            | -                | -                | -         |    -3.92 | ALENNNCAR, phx, sakamoto, space, Thuister     |
|            8 |     4097 | 2026-02-24 | R2           | L   | 0.554      | -            | -                | -                | -         |    -4.45 | ALENNNCAR, phx, sakamoto, space, Thuister     |
|            7 |     4275 | 2026-02-21 | ELITES       | W   | 0.533      | 0.371        | 0.000 (0.000)    | 0.032 (0.006)    | 0 (0.000) |     8.07 | ALENNNCAR, phx, sakamoto, space, Thuister     |
|            6 |     4787 | 2026-02-11 | GameHunters  | L   | 0.468      | -            | -                | -                | -         |    -2.18 | ALENNNCAR, phx, sakamoto, space, Thuister     |
|            5 |     4821 | 2026-02-10 | Fake do Biru | L   | 0.461      | -            | -                | -                | -         |    -0.99 | ALENNNCAR, phx, sakamoto, space, Thuister     |
|            4 |     4910 | 2026-02-07 | FURIA fe     | W   | 0.440      | 0.371        | 0.001 (0.000)    | 0.088 (0.014)    | 0 (0.000) |     9.51 | ALENNNCAR, sakamoto, space, talkzyn, Thuister |
|            3 |     4939 | 2026-02-06 | ex-KRÜ       | L   | 0.435      | -            | -                | -                | -         |    -2.14 | ALENNNCAR, sakamoto, space, talkzyn, Thuister |
|            2 |     4949 | 2026-02-06 | Imperial     | L   | 0.433      | -            | -                | -                | -         |    -0.31 | ALENNNCAR, sakamoto, space, talkzyn, Thuister |
|            1 |     4990 | 2026-02-04 | Players      | W   | 0.422      | 0.371        | 0.000 (0.000)    | 0.091 (0.014)    | 0 (0.000) |     7.43 | ALENNNCAR, sakamoto, space, talkzyn, Thuister |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($624,406.38)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
