### Roster Details<br />
Team Name: FLuffy Gangsters<br />
Roster: Djon8, h1ghnesS, SoLb, takanashi, yuramyata<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [168](../standings_global.md)<br />
Regional Rank: [107]( ../standings_europe.md)<br />
Final Rank Value:  668.7<br />
<br />
Final Rank Value (668.7) = Starting Rank Value (569.8) + Head To Head Adjustments (98.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.292[<sup>2</sup>](#table1)
- Opponent Network: 0.043[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.084<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 569.8
- 400 + ( ( 0.084 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 569.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |       77 | 2024-07-22 | 9INE              | L   | 1.000      | -            | -                | -                | -         |    -5.97 | Djon8, h1ghnesS, SoLb, takanashi, yuramyata |
|           13 |       93 | 2024-07-21 | Grannys Knockers  | W   | 1.000      | 0.143        | 0.005 (0.001)    | 0.143 (0.020)    | 0 (0.000) |    21.05 | Djon8, h1ghnesS, SoLb, takanashi, yuramyata |
|           12 |      128 | 2024-07-20 | GenOne            | L   | 1.000      | -            | -                | -                | -         |   -21.66 | Djon8, h1ghnesS, SoLb, takanashi, yuramyata |
|           11 |      171 | 2024-07-19 | ADEPTS            | W   | 1.000      | 0.143        | 0.003 (0.000)    | 0.031 (0.004)    | 0 (0.000) |    14.69 | Djon8, h1ghnesS, SoLb, takanashi, yuramyata |
|           10 |      437 | 2024-07-12 | Sashi             | L   | 1.000      | -            | -                | -                | -         |    -1.49 | Djon8, h1ghnesS, SoLb, takanashi, yuramyata |
|            9 |      520 | 2024-07-08 | TSM               | W   | 1.000      | 0.358        | 0.047 (0.017)    | 0.326 (0.117)    | 0 (0.000) |    26.49 | Djon8, h1ghnesS, SoLb, takanashi, yuramyata |
|            8 |      522 | 2024-07-08 | Insilio           | W   | 1.000      | 0.358        | 0.030 (0.011)    | 0.582 (0.208)    | 0 (0.000) |    28.05 | Djon8, h1ghnesS, SoLb, takanashi, yuramyata |
|            7 |      609 | 2024-06-16 | WOPA              | L   | 0.946      | -            | -                | -                | -         |   -14.08 | Djon8, h1ghnesS, SoLb, takanashi, yuramyata |
|            6 |      642 | 2024-06-15 | TÓR               | W   | 0.939      | 0.143        | 0.032 (0.004)    | 0.132 (0.018)    | 0 (0.000) |    25.17 | Djon8, h1ghnesS, SoLb, takanashi, yuramyata |
|            5 |      682 | 2024-06-14 | CPH Wolves        | L   | 0.933      | -            | -                | -                | -         |    -7.08 | Djon8, h1ghnesS, SoLb, takanashi, yuramyata |
|            4 |      729 | 2024-06-13 | TÓR               | W   | 0.924      | 0.143        | 0.032 (0.004)    | 0.132 (0.017)    | 0 (0.000) |    25.55 | Djon8, h1ghnesS, SoLb, takanashi, yuramyata |
|            3 |     1153 | 2024-06-03 | Aurora Young Blud | L   | 0.860      | -            | -                | -                | -         |    -6.63 | Djon8, h1ghnesS, SoLb, takanashi, yuramyata |
|            2 |     1194 | 2024-06-01 | Portugal          | W   | 0.848      | 0.372        | 0.004 (0.001)    | 0.145 (0.046)    | 0 (0.000) |    17.70 | Djon8, h1ghnesS, SoLb, takanashi, yuramyata |
|            1 |     1285 | 2024-05-29 | Enterprise        | L   | 0.827      | -            | -                | -                | -         |    -2.94 | Djon8, h1ghnesS, SoLb, takanashi, yuramyata |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
