### Roster Details<br />
Team Name: 9z<br />
Roster: HUASOPEEK, levi, Luken, max, urban0<br />
Global Rank: [253](../../standings_global_2026_05_04.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_05_04.md)<br />
Regional Rank: [61]( ../../standings_americas_2026_05_04.md)<br />
<br />
Final Rank Value:  640.8<br />
<br />
Final Rank Value (640.8) = Starting Rank Value (632.4) + Head To Head Adjustments (8.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.266[<sup>1</sup>](#table2)
- Bounty Collected: 0.227[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.003[<sup>2</sup>](#table1)

The average of these factors is 0.125<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 632.4
- 400 + ( ( 0.125 - 0.000 ) / ( 0.862 - 0.000 ) ) * 1600 = 632.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |     5629 | 2025-11-15 | Sharks          | W   | 0.069      | 0.363        | 0.080 (0.002)    | 0.548 (0.014)    | 0 (0.000) |     2.09 | HUASOPEEK, levi, Luken, max, urban0 |
|           11 |     5637 | 2025-11-15 | BESTIA          | L   | 0.068      | -            | -                | -                | -         |    -0.04 | HUASOPEEK, levi, Luken, max, urban0 |
|           10 |     5645 | 2025-11-15 | ODDIK           | W   | 0.067      | 0.371        | 0.039 (0.001)    | 0.565 (0.014)    | 0 (0.000) |     2.03 | HUASOPEEK, levi, Luken, max, urban0 |
|            9 |     5654 | 2025-11-14 | Bounty Hunters  | W   | 0.062      | 0.363        | 0.036 (0.001)    | 0.556 (0.012)    | 0 (0.000) |     1.81 | HUASOPEEK, levi, Luken, max, urban0 |
|            8 |     5668 | 2025-11-14 | Keyd Stars      | W   | 0.059      | 0.371        | 0.001 (0.000)    | 0.022 (0.000)    | 0 (0.000) |     0.96 | HUASOPEEK, levi, Luken, max, urban0 |
|            7 |     5676 | 2025-11-13 | Sharks          | L   | 0.056      | -            | -                | -                | -         |    -0.06 | HUASOPEEK, levi, Luken, max, urban0 |
|            6 |     5719 | 2025-11-12 | Prison Breakers | W   | 0.047      | 0.371        | 0.000 (0.000)    | 0.051 (0.001)    | 0 (0.000) |     0.47 | HUASOPEEK, levi, Luken, max, urban0 |
|            5 |     5771 | 2025-11-10 | KRÜ             | W   | 0.035      | 0.363        | 0.000 (0.000)    | 0.002 (0.000)    | 0 (0.000) |     0.48 | HUASOPEEK, levi, Luken, max, urban0 |
|            4 |     5839 | 2025-11-08 | Fluxo           | L   | 0.021      | -            | -                | -                | -         |    -0.02 | HUASOPEEK, levi, Luken, max, urban0 |
|            3 |     5882 | 2025-11-07 | METANOIA Wolves | W   | 0.017      | 0.333        | 0.014 (0.000)    | 0.193 (0.001)    | 1 (0.017) |     0.40 | HUASOPEEK, levi, Luken, max, urban0 |
|            2 |     5883 | 2025-11-07 | Sharks          | L   | 0.016      | -            | -                | -                | -         |    -0.02 | HUASOPEEK, levi, Luken, max, urban0 |
|            1 |     5889 | 2025-11-07 | UNO MILLE       | W   | 0.015      | 0.333        | 0.018 (0.000)    | 0.544 (0.003)    | 1 (0.015) |     0.34 | HUASOPEEK, levi, Luken, max, urban0 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($819.97)
- Divide that value by the 5th highest value among all rosters ($468,528.41)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-11-15 |      0.069 | $8,000.00      | $549.42         |
| 2025-11-15 |      0.068 | $4,000.00      | $270.55         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
