### Roster Details<br />
Team Name: GamerLegion<br />
Roster: acoR, isak, Keoz, Snax, volt<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [49](../standings_global.md)<br />
Regional Rank: [35]( ../standings_europe.md)<br />
Final Rank Value:  1120.2<br />
<br />
Final Rank Value (1120.2) = Starting Rank Value (1056.9) + Head To Head Adjustments (63.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.442[<sup>1</sup>](#table2)
- Bounty Collected: 0.389[<sup>2</sup>](#table1)
- Opponent Network: 0.051[<sup>2</sup>](#table1)
- LAN Wins: 0.410[<sup>2</sup>](#table1)

The average of these factors is 0.323<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1056.9
- 400 + ( ( 0.323 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 1056.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           22 |     2472 | 2024-03-20 | Imperial        | L   | 0.602      | -            | -                | -                | -         |    -1.86 | acoR, isak, Keoz, Snax, volt |
|           21 |     2490 | 2024-03-19 | Eternal Fire    | L   | 0.595      | -            | -                | -                | -         |    -0.39 | acoR, isak, Keoz, Snax, volt |
|           20 |     2500 | 2024-03-18 | Legacy          | W   | 0.588      | 0.143        | 0.146 (0.012)    | 0.452 (0.038)    | 1 (0.588) |     9.44 | acoR, isak, Keoz, Snax, volt |
|           19 |     2509 | 2024-03-17 | SAW             | L   | 0.583      | -            | -                | -                | -         |    -3.64 | acoR, isak, Keoz, Snax, volt |
|           18 |     2525 | 2024-03-17 | AMKAL           | W   | 0.582      | 0.143        | 0.139 (0.012)    | 0.613 (0.051)    | 1 (0.582) |    10.79 | acoR, isak, Keoz, Snax, volt |
|           17 |     2741 | 2024-03-08 | BIG             | L   | 0.523      | -            | -                | -                | -         |    -2.48 | acoR, isak, Keoz, Snax, volt |
|           16 |     3048 | 2024-02-24 | 9 Pandas        | L   | 0.435      | -            | -                | -                | -         |    -5.79 | acoR, isak, Keoz, Snax, volt |
|           15 |     3057 | 2024-02-24 | ex-Guild Eagles | W   | 0.434      | 0.143        | 0.010 (0.001)    | 0.391 (0.024)    | 1 (0.434) |     3.98 | acoR, isak, Keoz, Snax, volt |
|           14 |     3063 | 2024-02-23 | fnatic          | W   | 0.429      | 0.143        | 0.290 (0.018)    | 0.666 (0.041)    | 1 (0.429) |    12.47 | acoR, isak, Keoz, Snax, volt |
|           13 |     3081 | 2024-02-22 | HEROIC          | L   | 0.422      | -            | -                | -                | -         |    -0.28 | acoR, isak, Keoz, Snax, volt |
|           12 |     3107 | 2024-02-21 | OG              | W   | 0.415      | 0.143        | 0.235 (0.014)    | 0.253 (0.015)    | 1 (0.415) |     8.10 | acoR, isak, Keoz, Snax, volt |
|           11 |     3138 | 2024-02-20 | ENCE            | L   | 0.408      | -            | -                | -                | -         |    -0.92 | acoR, isak, Keoz, Snax, volt |
|           10 |     3160 | 2024-02-19 | PERA            | W   | 0.402      | 0.143        | 0.058 (0.003)    | 0.455 (0.026)    | 1 (0.402) |     4.56 | acoR, isak, Keoz, Snax, volt |
|            9 |     3169 | 2024-02-19 | Vitality        | L   | 0.400      | -            | -                | -                | -         |    -0.09 | acoR, isak, Keoz, Snax, volt |
|            8 |     3411 | 2024-02-06 | HEROIC          | L   | 0.315      | -            | -                | -                | -         |    -0.20 | acoR, isak, Keoz, Snax, volt |
|            7 |     3417 | 2024-02-05 | MOUZ            | L   | 0.309      | -            | -                | -                | -         |    -0.06 | acoR, isak, Keoz, Snax, volt |
|            6 |     3443 | 2024-02-04 | Monte           | W   | 0.301      | 1.000        | 0.189 (0.057)    | 0.674 (0.203)    | 1 (0.301) |     7.46 | acoR, isak, Keoz, Snax, volt |
|            5 |     3529 | 2024-02-01 | Virtus.pro      | W   | 0.282      | 0.143        | 0.345 (0.014)    | 0.427 (0.017)    | 1 (0.282) |     8.70 | acoR, isak, Keoz, Snax, volt |
|            4 |     3543 | 2024-01-31 | M80             | W   | 0.276      | 0.143        | 0.205 (0.008)    | 0.666 (0.026)    | 1 (0.276) |     6.70 | acoR, isak, Keoz, Snax, volt |
|            3 |     3611 | 2024-01-26 | FaZe            | L   | 0.243      | -            | -                | -                | -         |    -0.05 | acoR, isak, Keoz, Snax, volt |
|            2 |     3639 | 2024-01-25 | Liquid          | L   | 0.234      | -            | -                | -                | -         |    -0.25 | acoR, isak, Keoz, Snax, volt |
|            1 |     3657 | 2024-01-24 | FaZe            | W   | 0.228      | 0.581        | 1.000 (0.132)    | 0.540 (0.071)    | 1 (0.228) |     7.13 | acoR, isak, Keoz, Snax, volt |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($16,472.91)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-03-20 |      0.603 | $10,000.00     | $6,026.17       |
| 2024-03-10 |      0.537 | $5,000.00      | $2,683.33       |
| 2024-02-11 |      0.349 | $16,000.00     | $5,587.50       |
| 2024-01-28 |      0.256 | $8,500.00      | $2,175.92       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
