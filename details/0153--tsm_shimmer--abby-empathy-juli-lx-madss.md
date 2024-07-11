### Roster Details<br />
Team Name: TSM Shimmer<br />
Roster: abby, empathy, Juli, Lx, madss<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [153](../standings_global.md)<br />
Regional Rank: [42]( ../standings_americas.md)<br />
Final Rank Value:  704.1<br />
<br />
Final Rank Value (704.1) = Starting Rank Value (742.3) + Head To Head Adjustments (-38.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.392[<sup>1</sup>](#table2)
- Bounty Collected: 0.247[<sup>2</sup>](#table1)
- Opponent Network: 0.011[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.162<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 742.3
- 400 + ( ( 0.162 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 742.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           26 |      144 | 2024-06-16 | Lotus fe         | W   | 1.000      | 0.250        | 0.006 (0.002)    | 0.041 (0.010)    | 0 (0.000) |    13.57 | abby, empathy, Juli, Lx, madss     |
|           25 |      373 | 2024-06-09 | Perseverance     | L   | 0.987      | -            | -                | -                | -         |   -22.05 | abby, empathy, Florence, Lx, madss |
|           24 |      473 | 2024-06-07 | Zomblers         | L   | 0.976      | -            | -                | -                | -         |   -23.09 | abby, empathy, Florence, Lx, madss |
|           23 |      620 | 2024-06-05 | Asian Kings      | W   | 0.960      | 0.371        | -                | 0.000 (0.000)    | 0 (0.000) |     3.89 | abby, empathy, Florence, Lx, madss |
|           22 |      663 | 2024-06-04 | Nouns            | L   | 0.955      | -            | -                | -                | -         |    -4.29 | abby, empathy, Florence, Lx, madss |
|           21 |      667 | 2024-06-04 | Strife           | L   | 0.954      | -            | -                | -                | -         |   -15.23 | abby, empathy, Florence, Lx, madss |
|           20 |      772 | 2024-05-31 | NAVI Javelins    | L   | 0.929      | -            | -                | -                | -         |    -7.79 | abby, empathy, Lx, madss, phoebe   |
|           19 |      779 | 2024-05-31 | Fluxo Demons     | L   | 0.927      | -            | -                | -                | -         |    -8.04 | abby, empathy, Lx, madss, phoebe   |
|           18 |      892 | 2024-05-26 | FlyQuest RED     | L   | 0.895      | -            | -                | -                | -         |   -11.93 | abby, empathy, Lx, madss, phoebe   |
|           17 |      894 | 2024-05-26 | Karma            | W   | 0.894      | 0.303        | 0.006 (0.002)    | 0.108 (0.029)    | 0 (0.000) |    11.29 | abby, empathy, Lx, madss, phoebe   |
|           16 |     1492 | 2024-05-05 | Lotus fe         | W   | 0.755      | 0.250        | 0.006 (0.001)    | 0.041 (0.008)    | 0 (0.000) |     8.83 | abby, empathy, Lx, madss, phoebe   |
|           15 |     1846 | 2024-04-19 | Limitless Angels | W   | 0.649      | 0.322        | 0.004 (0.001)    | 0.076 (0.016)    | 0 (0.000) |     7.92 | abby, empathy, Lx, madss, phoebe   |
|           14 |     2024 | 2024-04-14 | FlyQuest RED     | L   | 0.615      | -            | -                | -                | -         |    -8.37 | abby, empathy, Lx, madss, phoebe   |
|           13 |     2073 | 2024-04-11 | COVEN            | W   | 0.595      | 0.322        | 0.003 (0.000)    | -                | 0 (0.000) |     3.98 | abby, empathy, Lx, madss, phoebe   |
|           12 |     2238 | 2024-04-07 | Limitless Angels | W   | 0.568      | 0.250        | 0.004 (0.001)    | 0.076 (0.011)    | 0 (0.000) |     6.97 | abby, empathy, Lx, madss, phoebe   |
|           11 |     2337 | 2024-04-03 | WG Bandits       | W   | 0.542      | 0.322        | 0.003 (0.000)    | 0.035 (0.006)    | 0 (0.000) |     5.86 | abby, empathy, Lx, madss, phoebe   |
|           10 |     2467 | 2024-03-27 | cleanup crew fe  | W   | 0.495      | 0.322        | 0.003 (0.000)    | 0.035 (0.006)    | 0 (0.000) |     6.00 | abby, empathy, Lx, madss, phoebe   |
|            9 |     2564 | 2024-03-21 | Karma            | W   | 0.456      | 0.322        | 0.006 (0.001)    | 0.108 (0.016)    | 0 (0.000) |     6.12 | abby, empathy, Lx, madss, phoebe   |
|            8 |     2704 | 2024-03-14 | Nouns fe         | W   | 0.409      | 0.322        | 0.004 (0.001)    | 0.055 (0.007)    | -         |     5.46 | abby, empathy, Lx, madss, phoebe   |
|            7 |     2913 | 2024-03-06 | FlyQuest RED     | L   | 0.356      | -            | -                | -                | -         |    -4.87 | abby, empathy, Lx, madss, phoebe   |
|            6 |     3001 | 2024-03-03 | FlyQuest RED     | L   | 0.335      | -            | -                | -                | -         |    -4.72 | abby, empathy, Lx, madss, phoebe   |
|            5 |     3143 | 2024-02-25 | FlyQuest RED     | L   | 0.288      | -            | -                | -                | -         |    -4.17 | abby, empathy, Lx, madss, phoebe   |
|            4 |     3558 | 2024-02-04 | FlyQuest RED     | L   | 0.148      | -            | -                | -                | -         |    -2.18 | abby, empathy, Lx, madss, phoebe   |
|            3 |     3713 | 2024-01-28 | FlyQuest RED     | L   | 0.102      | -            | -                | -                | -         |    -1.51 | abby, empathy, Lx, madss, phoebe   |
|            2 |     3850 | 2024-01-21 | NA savers        | W   | 0.055      | -            | -                | -                | -         |     0.36 | abby, empathy, Lx, phoebe, raynee  |
|            1 |     4139 | 2024-01-15 | NRG              | L   | 0.015      | -            | -                | -                | -         |    -0.15 | abby, chigen, empathy, Lx, phoebe  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,237.33)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      1.000 | $750.00        | $750.00         |
| 2024-06-02 |      0.941 | $4,000.00      | $3,764.81       |
| 2024-05-26 |      0.895 | $1,500.00      | $1,341.78       |
| 2024-05-05 |      0.755 | $750.00        | $566.29         |
| 2024-04-14 |      0.615 | $250.00        | $153.77         |
| 2024-04-07 |      0.568 | $750.00        | $426.32         |
| 2024-03-03 |      0.335 | $250.00        | $83.79          |
| 2024-02-25 |      0.288 | $250.00        | $72.11          |
| 2024-02-04 |      0.148 | $250.00        | $37.12          |
| 2024-01-21 |      0.055 | $750.00        | $41.34          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
