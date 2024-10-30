### Roster Details<br />
Team Name: Carpe Diem<br />
Roster: Lake, micro, Seb, Tender, wiz<br />
Global Rank: [171](../../standings_global_2024_10_30.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_10_30.md)<br />
Regional Rank: [50]( ../../standings_americas_2024_10_30.md)<br />
<br />
Final Rank Value:  664.8<br />
<br />
Final Rank Value (664.8) = Starting Rank Value (662.8) + Head To Head Adjustments (2.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.271[<sup>1</sup>](#table2)
- Bounty Collected: 0.250[<sup>2</sup>](#table1)
- Opponent Network: 0.009[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.132<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 662.8
- 400 + ( ( 0.132 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 662.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           16 |     3711 | 2024-06-13 | E-Xolos LAZER | L   | 0.274      | -            | -                | -                | -         |    -2.58 | Lake, micro, Seb, Tender, wiz |
|           15 |     4066 | 2024-06-05 | LAG           | L   | 0.222      | -            | -                | -                | -         |    -3.70 | Lake, micro, Seb, Tender, wiz |
|           14 |     4109 | 2024-06-04 | LAG           | L   | 0.216      | -            | -                | -                | -         |    -3.68 | Lake, micro, Seb, Tender, wiz |
|           13 |     4420 | 2024-05-22 | MIGHT         | W   | 0.129      | 0.477        | 0.000 (0.000)    | 0.004 (0.000)    | 0 (0.000) |     1.08 | Lake, micro, Seb, Tender, wiz |
|           12 |     4427 | 2024-05-22 | MIGHT         | W   | 0.129      | 0.477        | 0.000 (0.000)    | 0.004 (0.000)    | 0 (0.000) |     1.08 | Lake, micro, Seb, Tender, wiz |
|           11 |     4473 | 2024-05-21 | Legacy        | L   | 0.122      | -            | -                | -                | -         |    -0.40 | Lake, micro, Seb, Tender, wiz |
|           10 |     4477 | 2024-05-21 | Wildcard      | L   | 0.121      | -            | -                | -                | -         |    -0.24 | Lake, micro, Seb, Tender, wiz |
|            9 |     4483 | 2024-05-21 | Wildcard      | L   | 0.121      | -            | -                | -                | -         |    -0.24 | Lake, micro, Seb, Tender, wiz |
|            8 |     4507 | 2024-05-20 | BOSS          | W   | 0.116      | 0.477        | 0.060 (0.003)    | 0.380 (0.021)    | 0 (0.000) |     2.89 | Lake, micro, Seb, Tender, wiz |
|            7 |     4511 | 2024-05-20 | BOSS          | L   | 0.115      | -            | -                | -                | -         |    -0.75 | Lake, micro, Seb, Tender, wiz |
|            6 |     4633 | 2024-05-16 | Take Flyte    | W   | 0.089      | 0.477        | 0.006 (0.000)    | 0.244 (0.010)    | 0 (0.000) |     1.97 | Lake, micro, Seb, Tender, wiz |
|            5 |     4634 | 2024-05-16 | Take Flyte    | W   | 0.089      | 0.477        | 0.006 (0.000)    | 0.244 (0.010)    | 0 (0.000) |     1.98 | Lake, micro, Seb, Tender, wiz |
|            4 |     4671 | 2024-05-15 | Nouns         | W   | 0.082      | 0.477        | 0.076 (0.003)    | 0.613 (0.024)    | 0 (0.000) |     2.41 | Lake, micro, Seb, Tender, wiz |
|            3 |     4676 | 2024-05-15 | Nouns         | W   | 0.082      | 0.477        | 0.076 (0.003)    | 0.613 (0.024)    | 0 (0.000) |     2.40 | Lake, micro, Seb, Tender, wiz |
|            2 |     4727 | 2024-05-14 | LAG           | L   | 0.076      | -            | -                | -                | -         |    -1.27 | Lake, micro, Seb, Tender, wiz |
|            1 |     4734 | 2024-05-14 | LAG           | W   | 0.075      | 0.477        | 0.003 (0.000)    | 0.036 (0.001)    | 0 (0.000) |     1.11 | Lake, micro, Seb, Tender, wiz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($498.47)
- Divide that value by the 5th highest value among all rosters ($242,848.56)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
