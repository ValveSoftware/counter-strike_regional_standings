### Roster Details<br />
Team Name: Marsborne<br />
Roster: chop, Cxzi, Grizz, motm, WolfY<br />
Global Rank: [80](../../standings_global_2026_05_04.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_05_04.md)<br />
Regional Rank: [20]( ../../standings_americas_2026_05_04.md)<br />
<br />
Final Rank Value:  1133.3<br />
<br />
Final Rank Value (1133.3) = Starting Rank Value (1183.8) + Head To Head Adjustments (-50.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.409[<sup>1</sup>](#table2)
- Bounty Collected: 0.341[<sup>2</sup>](#table1)
- Opponent Network: 0.179[<sup>2</sup>](#table1)
- LAN Wins: 0.760[<sup>2</sup>](#table1)

The average of these factors is 0.422<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1183.8
- 400 + ( ( 0.422 - 0.000 ) / ( 0.862 - 0.000 ) ) * 1600 = 1183.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           55 |      158 | 2026-04-28 | Chicken Coop   | L   | 1.000      | -            | -                | -                | -         |   -25.61 | chop, Grizz, Lucid, motm, WolfY |
|           54 |      184 | 2026-04-27 | insane players | W   | 1.000      | 0.363        | 0.021 (0.008)    | 0.464 (0.168)    | -         |     3.39 | chop, Grizz, Lucid, motm, WolfY |
|           53 |      230 | 2026-04-26 | Reign Above    | L   | 1.000      | -            | -                | -                | -         |   -30.42 | chop, Grizz, Lucid, motm, WolfY |
|           52 |      566 | 2026-04-14 | Voca           | W   | 1.000      | 0.333        | 0.085 (0.028)    | 0.832 (0.277)    | -         |    21.35 | chop, Cxzi, Grizz, motm, WolfY  |
|           51 |      587 | 2026-04-13 | Aether         | W   | 1.000      | 0.333        | -                | 0.416 (0.139)    | -         |     4.18 | chop, Cxzi, Grizz, motm, WolfY  |
|           50 |      632 | 2026-04-11 | insane players | W   | 1.000      | 0.333        | 0.021 (0.007)    | 0.464 (0.155)    | -         |     3.34 | chop, Cxzi, Grizz, motm, WolfY  |
|           49 |      985 | 2026-04-03 | Galorys        | L   | 0.994      | -            | -                | -                | -         |   -19.91 | chop, Cxzi, Grizz, motm, WolfY  |
|           48 |     1166 | 2026-04-01 | ALKA           | W   | 0.980      | -            | -                | -                | 1 (0.980) |     1.24 | chop, Cxzi, Grizz, motm, WolfY  |
|           47 |     1179 | 2026-04-01 | Galorys        | L   | 0.980      | -            | -                | -                | -         |   -21.11 | chop, Cxzi, Grizz, motm, WolfY  |
|           46 |     1473 | 2026-03-28 | ODDIK          | L   | 0.955      | -            | -                | -                | -         |   -13.92 | chop, Cxzi, Grizz, motm, WolfY  |
|           45 |     1591 | 2026-03-26 | 9z             | L   | 0.943      | -            | -                | -                | -         |    -5.46 | chop, Cxzi, Grizz, motm, WolfY  |
|           44 |     1597 | 2026-03-26 | ODDIK          | W   | 0.942      | 0.392        | 0.039 (0.014)    | 0.565 (0.209)    | 1 (0.942) |    15.70 | chop, Cxzi, Grizz, motm, WolfY  |
|           43 |     2508 | 2026-03-08 | 9z             | L   | 0.821      | -            | -                | -                | -         |    -5.09 | chop, Cxzi, Grizz, motm, WolfY  |
|           42 |     2573 | 2026-03-07 | Imperial       | W   | 0.815      | 0.384        | 0.044 (0.014)    | 0.507 (0.159)    | 1 (0.815) |    15.21 | chop, Cxzi, Grizz, motm, WolfY  |
|           41 |     2603 | 2026-03-07 | BESTIA         | W   | 0.813      | 0.384        | 0.021 (0.007)    | 0.757 (0.236)    | 1 (0.813) |    16.24 | chop, Cxzi, Grizz, motm, WolfY  |
|           40 |     2656 | 2026-03-05 | RED Canids     | W   | 0.802      | 0.384        | 0.065 (0.020)    | 0.453 (0.140)    | 1 (0.802) |    15.92 | chop, Cxzi, Grizz, motm, WolfY  |
|           39 |     2663 | 2026-03-05 | Galorys        | W   | 0.801      | -            | -                | -                | 1 (0.801) |     8.77 | chop, Cxzi, Grizz, motm, WolfY  |
|           38 |     2950 | 2026-02-27 | 9z             | L   | 0.761      | -            | -                | -                | -         |    -4.70 | chop, Cxzi, Grizz, motm, WolfY  |
|           37 |     3012 | 2026-02-26 | Fake do Biru   | W   | 0.754      | 0.435        | 0.031 (0.010)    | 0.517 (0.169)    | 1 (0.754) |     5.87 | chop, Cxzi, Grizz, motm, WolfY  |
|           36 |     3074 | 2026-02-25 | Fluxo          | L   | 0.747      | -            | -                | -                | -         |   -10.09 | chop, Cxzi, Grizz, motm, WolfY  |
|           35 |     3149 | 2026-02-23 | Voca           | L   | 0.736      | -            | -                | -                | -         |    -6.37 | chop, Cxzi, Grizz, motm, WolfY  |
|           34 |     3188 | 2026-02-22 | Rave           | W   | 0.730      | -            | -                | -                | -         |     2.43 | chop, Cxzi, Grizz, motm, WolfY  |
|           33 |     3264 | 2026-02-21 | Zomblers       | W   | 0.723      | 0.363        | 0.017 (0.005)    | 0.524 (0.138)    | -         |     3.04 | chop, Cxzi, Grizz, motm, WolfY  |
|           32 |     3313 | 2026-02-20 | Voca           | L   | 0.717      | -            | -                | -                | -         |    -6.15 | chop, Cxzi, Grizz, motm, WolfY  |
|           31 |     3415 | 2026-02-18 | FlyQuest RED   | W   | 0.703      | -            | -                | -                | -         |     0.97 | chop, Cxzi, Grizz, motm, WolfY  |
|           30 |     3475 | 2026-02-17 | InControl      | W   | 0.696      | 0.363        | 0.021 (0.005)    | -                | -         |     2.70 | chop, Cxzi, Grizz, motm, WolfY  |
|           29 |     3824 | 2026-02-10 | Rave           | W   | 0.649      | -            | -                | -                | -         |     2.07 | chop, Cxzi, Grizz, motm, WolfY  |
|           28 |     3864 | 2026-02-09 | insane players | W   | 0.642      | -            | -                | -                | -         |     2.40 | chop, Cxzi, Grizz, motm, WolfY  |
|           27 |     3913 | 2026-02-07 | Zomblers       | W   | 0.629      | -            | -                | -                | -         |     2.46 | chop, Cxzi, Grizz, motm, WolfY  |
|           26 |     3950 | 2026-02-06 | Voca           | L   | 0.621      | -            | -                | -                | -         |    -4.94 | chop, Cxzi, Grizz, motm, WolfY  |
|           25 |     4119 | 2026-01-31 | BESTIA         | L   | 0.583      | -            | -                | -                | -         |    -4.66 | chop, Cxzi, Grizz, motm, WolfY  |
|           24 |     4125 | 2026-01-31 | Procyon        | W   | 0.582      | -            | -                | -                | 1 (0.582) |     2.56 | chop, Cxzi, Grizz, motm, WolfY  |
|           23 |     4169 | 2026-01-30 | BESTIA         | L   | 0.574      | -            | -                | -                | -         |    -4.72 | chop, Cxzi, Grizz, motm, WolfY  |
|           22 |     4178 | 2026-01-30 | Procyon        | W   | 0.573      | -            | -                | -                | 1 (0.573) |     2.36 | chop, Cxzi, Grizz, motm, WolfY  |
|           21 |     4743 | 2026-01-11 | NRG            | L   | 0.449      | -            | -                | -                | -         |    -3.28 | chop, Cxzi, Grizz, motm, WolfY  |
|           20 |     4750 | 2026-01-10 | BOSS           | W   | 0.443      | -            | -                | -                | 1 (0.443) |     0.96 | chop, Cxzi, Grizz, motm, WolfY  |
|           19 |     4752 | 2026-01-10 | regain         | W   | 0.442      | -            | -                | -                | -         |     1.44 | chop, Cxzi, Grizz, motm, WolfY  |
|           18 |     4761 | 2026-01-10 | BOSS           | L   | 0.438      | -            | -                | -                | -         |   -12.92 | chop, Cxzi, Grizz, motm, WolfY  |
|           17 |     4793 | 2026-01-04 | M80            | L   | 0.400      | -            | -                | -                | -         |    -2.68 | chop, Cxzi, Grizz, motm, WolfY  |
|           16 |     4834 | 2026-01-03 | Reign Above    | W   | 0.395      | -            | -                | -                | -         |     0.43 | chop, Cxzi, Grizz, motm, WolfY  |
|           15 |     4838 | 2026-01-03 | NRG            | L   | 0.394      | -            | -                | -                | -         |    -3.52 | chop, Cxzi, Grizz, motm, WolfY  |
|           14 |     4847 | 2026-01-03 | Reign Above    | W   | 0.393      | -            | -                | -                | -         |     0.40 | chop, Cxzi, Grizz, motm, WolfY  |
|           13 |     5612 | 2025-11-16 | Voca           | L   | 0.074      | -            | -                | -                | -         |    -0.60 | chop, Cxzi, Grizz, viz, WolfY   |
|           12 |     5628 | 2025-11-15 | Rave           | L   | 0.070      | -            | -                | -                | -         |    -2.04 | chop, Cxzi, Grizz, viz, WolfY   |
|           11 |     5630 | 2025-11-15 | Zomblers       | W   | 0.068      | -            | -                | -                | -         |     0.20 | chop, Cxzi, Grizz, viz, WolfY   |
|           10 |     5652 | 2025-11-14 | Voca           | W   | 0.063      | -            | -                | -                | -         |     1.48 | chop, Cxzi, Grizz, viz, WolfY   |
|            9 |     5705 | 2025-11-12 | BOSS           | W   | 0.050      | -            | -                | -                | -         |     0.33 | chop, Cxzi, Grizz, viz, WolfY   |
|            8 |     5740 | 2025-11-11 | Mythic         | W   | 0.043      | -            | -                | -                | -         |     0.05 | chop, Cxzi, Grizz, viz, WolfY   |
|            7 |     5766 | 2025-11-10 | Voca           | L   | 0.036      | -            | -                | -                | -         |    -0.29 | chop, Cxzi, Grizz, viz, WolfY   |
|            6 |     5794 | 2025-11-09 | BC.Game        | W   | 0.028      | -            | -                | -                | -         |     0.47 | chop, Cxzi, Grizz, viz, WolfY   |
|            5 |     5800 | 2025-11-09 | M80            | L   | 0.027      | -            | -                | -                | -         |    -0.20 | chop, Cxzi, Grizz, viz, WolfY   |
|            4 |     5807 | 2025-11-09 | FlyQuest RED   | W   | 0.026      | -            | -                | -                | -         |     0.04 | chop, Cxzi, Grizz, viz, WolfY   |
|            3 |     5831 | 2025-11-08 | F5             | W   | 0.022      | -            | -                | -                | -         |     0.08 | chop, Cxzi, Grizz, viz, WolfY   |
|            2 |     5838 | 2025-11-08 | barry pickers  | W   | 0.021      | -            | -                | -                | -         |     0.01 | chop, Cxzi, Grizz, viz, WolfY   |
|            1 |     6015 | 2025-11-05 | Voca           | W   | 0.003      | -            | -                | -                | -         |     0.07 | chop, Cxzi, Grizz, viz, WolfY   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($16,931.41)
- Divide that value by the 5th highest value among all rosters ($468,528.41)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-04-14 |      1.000 | $5,000.00      | $5,000.00       |
| 2026-03-08 |      0.821 | $6,000.00      | $4,928.10       |
| 2026-02-24 |      0.743 | $2,000.00      | $1,486.62       |
| 2026-02-10 |      0.649 | $5,000.00      | $3,246.01       |
| 2026-02-01 |      0.589 | $1,000.00      | $589.39         |
| 2026-01-11 |      0.449 | $3,000.00      | $1,348.48       |
| 2025-11-15 |      0.070 | $4,000.00      | $279.15         |
| 2025-11-09 |      0.030 | $1,300.00      | $38.56          |
| 2025-11-05 |      0.003 | $5,000.00      | $15.10          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
