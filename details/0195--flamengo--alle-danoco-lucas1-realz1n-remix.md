### Roster Details<br />
Team Name: Flamengo<br />
Roster: ALLE, danoco, LUCAS1, realz1n, remix<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [195](../standings_global.md)<br />
Regional Rank: [53]( ../standings_americas.md)<br />
Final Rank Value:  537.3<br />
<br />
Final Rank Value (537.3) = Starting Rank Value (517.8) + Head To Head Adjustments (19.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.228[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.058<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 517.8
- 400 + ( ( 0.058 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 517.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |     3714 | 2024-01-21 | RED Canids | L   | 0.211      | -            | -                | -                | -         |    -0.20 | ALLE, danoco, LUCAS1, realz1n, remix |
|            9 |     3724 | 2024-01-21 | TIMACETA   | W   | 0.209      | 0.143        | 0.000 (0.000)    | 0.023 (0.001)    | 0 (0.000) |     3.21 | ALLE, danoco, LUCAS1, realz1n, remix |
|            8 |     3749 | 2024-01-20 | Galorys    | W   | 0.204      | 0.143        | 0.023 (0.001)    | 0.517 (0.015)    | 0 (0.000) |     5.62 | ALLE, danoco, LUCAS1, realz1n, remix |
|            7 |     3797 | 2024-01-19 | ODDIK      | L   | 0.198      | -            | -                | -                | -         |    -0.49 | ALLE, danoco, LUCAS1, realz1n, remix |
|            6 |     3806 | 2024-01-19 | BESTIA     | L   | 0.197      | -            | -                | -                | -         |    -0.38 | ALLE, danoco, LUCAS1, realz1n, remix |
|            5 |     4198 | 2024-01-09 | Legacy     | W   | 0.131      | 0.143        | 0.146 (0.003)    | 0.452 (0.008)    | 0 (0.000) |     3.95 | ALLE, danoco, LUCAS1, realz1n, remix |
|            4 |     4205 | 2024-01-09 | ODDIK      | W   | 0.130      | 0.143        | 0.040 (0.001)    | 0.558 (0.010)    | 0 (0.000) |     3.81 | ALLE, danoco, LUCAS1, realz1n, remix |
|            3 |     4209 | 2024-01-09 | Case       | W   | 0.130      | 0.143        | 0.000 (0.000)    | 0.038 (0.001)    | 0 (0.000) |     2.71 | ALLE, danoco, LUCAS1, realz1n, remix |
|            2 |     4222 | 2024-01-09 | aNXi5tyS   | W   | 0.129      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.39 | ALLE, danoco, LUCAS1, realz1n, remix |
|            1 |     4276 | 2023-12-21 | Case       | L   | 0.003      | -            | -                | -                | -         |    -0.03 | ALLE, danoco, LUCAS1, realz1n, remix |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
