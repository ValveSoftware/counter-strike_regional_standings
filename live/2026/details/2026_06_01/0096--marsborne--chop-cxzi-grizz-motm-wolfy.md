### Roster Details<br />
Team Name: Marsborne<br />
Roster: chop, Cxzi, Grizz, motm, WolfY<br />
Global Rank: [96](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_06_01.md)<br />
Regional Rank: [23]( ../../standings_americas_2026_06_01.md)<br />
<br />
Final Rank Value:  1072.8<br />
<br />
Final Rank Value (1072.8) = Starting Rank Value (1062.3) + Head To Head Adjustments (10.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.372[<sup>1</sup>](#table2)
- Bounty Collected: 0.313[<sup>2</sup>](#table1)
- Opponent Network: 0.129[<sup>2</sup>](#table1)
- LAN Wins: 0.577[<sup>2</sup>](#table1)

The average of these factors is 0.348<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1062.3
- 400 + ( ( 0.348 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 1062.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           42 |     1113 | 2026-04-28 | Chicken Coop    | L   | 0.974      | -            | -                | -                | -         |   -19.15 | chop, Grizz, Lucid, motm, WolfY |
|           41 |     1146 | 2026-04-27 | insane players  | W   | 0.969      | 0.363        | 0.013 (0.005)    | 0.372 (0.131)    | -         |     4.27 | chop, Grizz, Lucid, motm, WolfY |
|           40 |     1192 | 2026-04-26 | Reign Above     | L   | 0.962      | -            | -                | -                | -         |   -28.02 | chop, Grizz, Lucid, motm, WolfY |
|           39 |     1552 | 2026-04-14 | Voca            | W   | 0.883      | 0.333        | 0.053 (0.016)    | 0.661 (0.194)    | -         |    19.40 | chop, Cxzi, Grizz, motm, WolfY  |
|           38 |     1573 | 2026-04-13 | Aether          | W   | 0.875      | -            | -                | -                | -         |     4.34 | chop, Cxzi, Grizz, motm, WolfY  |
|           37 |     1618 | 2026-04-11 | insane players  | W   | 0.861      | 0.333        | 0.013 (0.004)    | 0.372 (0.107)    | -         |     3.84 | chop, Cxzi, Grizz, motm, WolfY  |
|           36 |     1971 | 2026-04-03 | Galorys         | L   | 0.807      | -            | -                | -                | -         |   -11.74 | chop, Cxzi, Grizz, motm, WolfY  |
|           35 |     2152 | 2026-04-01 | ALKA            | W   | 0.794      | -            | -                | -                | 1 (0.794) |     1.78 | chop, Cxzi, Grizz, motm, WolfY  |
|           34 |     2165 | 2026-04-01 | Galorys         | L   | 0.793      | -            | -                | -                | -         |   -12.25 | chop, Cxzi, Grizz, motm, WolfY  |
|           33 |     2459 | 2026-03-28 | Turma do Pagode | L   | 0.769      | -            | -                | -                | -         |    -8.75 | chop, Cxzi, Grizz, motm, WolfY  |
|           32 |     2577 | 2026-03-26 | 9z              | L   | 0.756      | -            | -                | -                | -         |    -1.48 | chop, Cxzi, Grizz, motm, WolfY  |
|           31 |     2583 | 2026-03-26 | Turma do Pagode | W   | 0.755      | 0.392        | 0.029 (0.009)    | 0.548 (0.162)    | 1 (0.755) |    15.44 | chop, Cxzi, Grizz, motm, WolfY  |
|           30 |     3494 | 2026-03-08 | 9z              | L   | 0.635      | -            | -                | -                | -         |    -1.25 | chop, Cxzi, Grizz, motm, WolfY  |
|           29 |     3559 | 2026-03-07 | Imperial        | W   | 0.629      | 0.384        | 0.027 (0.006)    | 0.485 (0.117)    | 1 (0.629) |    12.63 | chop, Cxzi, Grizz, motm, WolfY  |
|           28 |     3589 | 2026-03-07 | BESTIA          | W   | 0.626      | 0.384        | 0.016 (0.004)    | 0.659 (0.159)    | 1 (0.626) |    13.56 | chop, Cxzi, Grizz, motm, WolfY  |
|           27 |     3642 | 2026-03-05 | RED Canids      | W   | 0.616      | 0.384        | 0.042 (0.010)    | 0.340 (0.080)    | 1 (0.616) |    13.05 | chop, Cxzi, Grizz, motm, WolfY  |
|           26 |     3649 | 2026-03-05 | Galorys         | W   | 0.615      | 0.384        | 0.013 (0.003)    | 0.472 (0.111)    | 1 (0.615) |    11.60 | chop, Cxzi, Grizz, motm, WolfY  |
|           25 |     3936 | 2026-02-27 | 9z              | L   | 0.574      | -            | -                | -                | -         |    -0.96 | chop, Cxzi, Grizz, motm, WolfY  |
|           24 |     3998 | 2026-02-26 | Fake do Biru    | W   | 0.567      | 0.435        | 0.020 (0.005)    | 0.567 (0.140)    | 1 (0.567) |     6.70 | chop, Cxzi, Grizz, motm, WolfY  |
|           23 |     4060 | 2026-02-25 | Fluxo           | L   | 0.561      | -            | -                | -                | -         |    -5.99 | chop, Cxzi, Grizz, motm, WolfY  |
|           22 |     4135 | 2026-02-23 | Voca            | L   | 0.550      | -            | -                | -                | -         |    -4.51 | chop, Cxzi, Grizz, motm, WolfY  |
|           21 |     4174 | 2026-02-22 | Rave            | W   | 0.543      | -            | -                | -                | -         |     2.18 | chop, Cxzi, Grizz, motm, WolfY  |
|           20 |     4250 | 2026-02-21 | Zomblers        | W   | 0.536      | 0.363        | -                | 0.436 (0.085)    | -         |     3.13 | chop, Cxzi, Grizz, motm, WolfY  |
|           19 |     4299 | 2026-02-20 | Voca            | L   | 0.530      | -            | -                | -                | -         |    -4.30 | chop, Cxzi, Grizz, motm, WolfY  |
|           18 |     4401 | 2026-02-18 | FlyQuest RED    | W   | 0.516      | -            | -                | -                | -         |     1.08 | chop, Cxzi, Grizz, motm, WolfY  |
|           17 |     4461 | 2026-02-17 | Iowa Stormboar  | W   | 0.510      | 0.363        | 0.013 (0.002)    | -                | -         |     2.97 | chop, Cxzi, Grizz, motm, WolfY  |
|           16 |     4810 | 2026-02-10 | Rave            | W   | 0.463      | -            | -                | -                | -         |     1.80 | chop, Cxzi, Grizz, motm, WolfY  |
|           15 |     4850 | 2026-02-09 | insane players  | W   | 0.455      | -            | -                | -                | -         |     2.38 | chop, Cxzi, Grizz, motm, WolfY  |
|           14 |     4899 | 2026-02-07 | Zomblers        | W   | 0.442      | -            | -                | -                | -         |     2.51 | chop, Cxzi, Grizz, motm, WolfY  |
|           13 |     4936 | 2026-02-06 | Voca            | L   | 0.435      | -            | -                | -                | -         |    -3.33 | chop, Cxzi, Grizz, motm, WolfY  |
|           12 |     5105 | 2026-01-31 | BESTIA          | L   | 0.396      | -            | -                | -                | -         |    -2.86 | chop, Cxzi, Grizz, motm, WolfY  |
|           11 |     5111 | 2026-01-31 | Procyon         | W   | 0.395      | -            | -                | -                | 1 (0.395) |     2.55 | chop, Cxzi, Grizz, motm, WolfY  |
|           10 |     5155 | 2026-01-30 | BESTIA          | L   | 0.387      | -            | -                | -                | -         |    -2.83 | chop, Cxzi, Grizz, motm, WolfY  |
|            9 |     5164 | 2026-01-30 | Procyon         | W   | 0.386      | -            | -                | -                | 1 (0.386) |     2.41 | chop, Cxzi, Grizz, motm, WolfY  |
|            8 |     5729 | 2026-01-11 | NRG             | L   | 0.262      | -            | -                | -                | -         |    -2.32 | chop, Cxzi, Grizz, motm, WolfY  |
|            7 |     5736 | 2026-01-10 | BOSS            | W   | 0.257      | -            | -                | -                | 1 (0.257) |     0.93 | chop, Cxzi, Grizz, motm, WolfY  |
|            6 |     5738 | 2026-01-10 | regain          | W   | 0.255      | -            | -                | -                | -         |     1.37 | chop, Cxzi, Grizz, motm, WolfY  |
|            5 |     5747 | 2026-01-10 | BOSS            | L   | 0.251      | -            | -                | -                | -         |    -7.04 | chop, Cxzi, Grizz, motm, WolfY  |
|            4 |     5779 | 2026-01-04 | M80             | L   | 0.214      | -            | -                | -                | -         |    -1.16 | chop, Cxzi, Grizz, motm, WolfY  |
|            3 |     5820 | 2026-01-03 | Reign Above     | W   | 0.208      | -            | -                | -                | -         |     0.27 | chop, Cxzi, Grizz, motm, WolfY  |
|            2 |     5824 | 2026-01-03 | NRG             | L   | 0.208      | -            | -                | -                | -         |    -2.04 | chop, Cxzi, Grizz, motm, WolfY  |
|            1 |     5833 | 2026-01-03 | Reign Above     | W   | 0.207      | -            | -                | -                | -         |     0.26 | chop, Cxzi, Grizz, motm, WolfY  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($12,839.81)
- Divide that value by the 5th highest value among all rosters ($624,406.38)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-04-14 |      0.883 | $5,000.00      | $4,412.93       |
| 2026-03-08 |      0.635 | $6,000.00      | $3,808.67       |
| 2026-02-24 |      0.557 | $2,000.00      | $1,113.48       |
| 2026-02-10 |      0.463 | $5,000.00      | $2,313.15       |
| 2026-02-01 |      0.403 | $1,000.00      | $402.82         |
| 2026-01-11 |      0.263 | $3,000.00      | $788.77         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
