### Roster Details<br />
Team Name: Marsborne<br />
Roster: chop, Cxzi, Grizz, motm, WolfY<br />
Global Rank: [112](../../standings_global_2026_07_06.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_07_06.md)<br />
Regional Rank: [25]( ../../standings_americas_2026_07_06.md)<br />
<br />
Final Rank Value:  928.8<br />
<br />
Final Rank Value (928.8) = Starting Rank Value (894.0) + Head To Head Adjustments (34.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.349[<sup>1</sup>](#table2)
- Bounty Collected: 0.287[<sup>2</sup>](#table1)
- Opponent Network: 0.066[<sup>2</sup>](#table1)
- LAN Wins: 0.346[<sup>2</sup>](#table1)

The average of these factors is 0.262<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 894.0
- 400 + ( ( 0.262 - 0.000 ) / ( 0.849 - 0.000 ) ) * 1600 = 894.0


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
|           38 |     1774 | 2026-04-28 | Chicken Coop    | L   | 0.741      | -            | -                | -                | -         |   -10.25 | chop, Grizz, Lucid, motm, WolfY |
|           37 |     1807 | 2026-04-27 | insane players  | W   | 0.736      | 0.363        | 0.011 (0.003)    | 0.274 (0.073)    | -         |     5.55 | chop, Grizz, Lucid, motm, WolfY |
|           36 |     1853 | 2026-04-26 | Reign Above     | L   | 0.729      | -            | -                | -                | -         |   -19.38 | chop, Grizz, Lucid, motm, WolfY |
|           35 |     2213 | 2026-04-14 | Voca            | W   | 0.650      | 0.333        | 0.041 (0.009)    | 0.494 (0.107)    | -         |    14.59 | chop, Cxzi, Grizz, motm, WolfY  |
|           34 |     2234 | 2026-04-13 | Aether          | W   | 0.642      | -            | -                | -                | -         |     5.12 | chop, Cxzi, Grizz, motm, WolfY  |
|           33 |     2279 | 2026-04-11 | insane players  | W   | 0.628      | 0.333        | 0.011 (0.002)    | 0.274 (0.057)    | -         |     4.95 | chop, Cxzi, Grizz, motm, WolfY  |
|           32 |     2632 | 2026-04-03 | Galorys         | L   | 0.574      | -            | -                | -                | -         |    -7.00 | chop, Cxzi, Grizz, motm, WolfY  |
|           31 |     2813 | 2026-04-01 | ALKA            | W   | 0.561      | 0.435        | -                | 0.156 (0.038)    | 1 (0.561) |     2.66 | chop, Cxzi, Grizz, motm, WolfY  |
|           30 |     2826 | 2026-04-01 | Galorys         | L   | 0.560      | -            | -                | -                | -         |    -7.07 | chop, Cxzi, Grizz, motm, WolfY  |
|           29 |     3120 | 2026-03-28 | Turma do Pagode | L   | 0.535      | -            | -                | -                | -         |    -6.12 | chop, Cxzi, Grizz, motm, WolfY  |
|           28 |     3238 | 2026-03-26 | 9z              | L   | 0.523      | -            | -                | -                | -         |    -0.28 | chop, Cxzi, Grizz, motm, WolfY  |
|           27 |     3244 | 2026-03-26 | Turma do Pagode | W   | 0.522      | 0.392        | 0.020 (0.004)    | 0.407 (0.083)    | 1 (0.522) |    10.66 | chop, Cxzi, Grizz, motm, WolfY  |
|           26 |     4155 | 2026-03-08 | 9z              | L   | 0.402      | -            | -                | -                | -         |    -0.21 | chop, Cxzi, Grizz, motm, WolfY  |
|           25 |     4220 | 2026-03-07 | Imperial        | W   | 0.396      | 0.384        | 0.019 (0.003)    | 0.359 (0.055)    | 1 (0.396) |     7.67 | chop, Cxzi, Grizz, motm, WolfY  |
|           24 |     4250 | 2026-03-07 | BESTIA          | W   | 0.393      | 0.384        | 0.013 (0.002)    | 0.496 (0.075)    | 1 (0.393) |     9.19 | chop, Cxzi, Grizz, motm, WolfY  |
|           23 |     4303 | 2026-03-05 | RED Canids      | W   | 0.383      | 0.384        | 0.032 (0.005)    | -                | 1 (0.383) |     7.82 | chop, Cxzi, Grizz, motm, WolfY  |
|           22 |     4310 | 2026-03-05 | Galorys         | W   | 0.382      | 0.384        | 0.012 (0.002)    | 0.438 (0.064)    | 1 (0.382) |     8.02 | chop, Cxzi, Grizz, motm, WolfY  |
|           21 |     4597 | 2026-02-27 | 9z              | L   | 0.341      | -            | -                | -                | -         |    -0.15 | chop, Cxzi, Grizz, motm, WolfY  |
|           20 |     4659 | 2026-02-26 | Fake do Biru    | W   | 0.334      | 0.435        | 0.018 (0.003)    | 0.453 (0.066)    | 1 (0.334) |     4.51 | chop, Cxzi, Grizz, motm, WolfY  |
|           19 |     4721 | 2026-02-25 | Fluxo           | L   | 0.327      | -            | -                | -                | -         |    -2.94 | chop, Cxzi, Grizz, motm, WolfY  |
|           18 |     4796 | 2026-02-23 | Voca            | L   | 0.317      | -            | -                | -                | -         |    -2.72 | chop, Cxzi, Grizz, motm, WolfY  |
|           17 |     4835 | 2026-02-22 | Rave            | W   | 0.310      | -            | -                | -                | -         |     1.92 | chop, Cxzi, Grizz, motm, WolfY  |
|           16 |     4911 | 2026-02-21 | Zomblers        | W   | 0.303      | -            | -                | -                | -         |     2.79 | chop, Cxzi, Grizz, motm, WolfY  |
|           15 |     4960 | 2026-02-20 | Voca            | L   | 0.297      | -            | -                | -                | -         |    -2.53 | chop, Cxzi, Grizz, motm, WolfY  |
|           14 |     5062 | 2026-02-18 | FlyQuest RED    | W   | 0.283      | -            | -                | -                | -         |     1.26 | chop, Cxzi, Grizz, motm, WolfY  |
|           13 |     5122 | 2026-02-17 | Iowa Stormboar  | W   | 0.277      | 0.363        | 0.012 (0.001)    | 0.432 (0.043)    | -         |     2.77 | chop, Cxzi, Grizz, motm, WolfY  |
|           12 |     5471 | 2026-02-10 | Rave            | W   | 0.230      | -            | -                | -                | -         |     1.41 | chop, Cxzi, Grizz, motm, WolfY  |
|           11 |     5511 | 2026-02-09 | insane players  | W   | 0.222      | -            | -                | -                | -         |     1.93 | chop, Cxzi, Grizz, motm, WolfY  |
|           10 |     5560 | 2026-02-07 | Zomblers        | W   | 0.209      | -            | -                | -                | -         |     1.92 | chop, Cxzi, Grizz, motm, WolfY  |
|            9 |     5597 | 2026-02-06 | Voca            | L   | 0.202      | -            | -                | -                | -         |    -1.67 | chop, Cxzi, Grizz, motm, WolfY  |
|            8 |     5766 | 2026-01-31 | BESTIA          | L   | 0.163      | -            | -                | -                | -         |    -1.09 | chop, Cxzi, Grizz, motm, WolfY  |
|            7 |     5772 | 2026-01-31 | Procyon         | W   | 0.162      | -            | -                | -                | 1 (0.162) |     1.47 | chop, Cxzi, Grizz, motm, WolfY  |
|            6 |     5816 | 2026-01-30 | BESTIA          | L   | 0.154      | -            | -                | -                | -         |    -1.03 | chop, Cxzi, Grizz, motm, WolfY  |
|            5 |     5825 | 2026-01-30 | Procyon         | W   | 0.153      | -            | -                | -                | 1 (0.153) |     1.38 | chop, Cxzi, Grizz, motm, WolfY  |
|            4 |     6390 | 2026-01-11 | NRG             | L   | 0.029      | -            | -                | -                | -         |    -0.20 | chop, Cxzi, Grizz, motm, WolfY  |
|            3 |     6397 | 2026-01-10 | BOSS            | W   | 0.023      | -            | -                | -                | 1 (0.023) |     0.14 | chop, Cxzi, Grizz, motm, WolfY  |
|            2 |     6399 | 2026-01-10 | regain          | W   | 0.022      | -            | -                | -                | -         |     0.20 | chop, Cxzi, Grizz, motm, WolfY  |
|            1 |     6408 | 2026-01-10 | BOSS            | L   | 0.018      | -            | -                | -                | -         |    -0.46 | chop, Cxzi, Grizz, motm, WolfY  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,712.02)
- Divide that value by the 5th highest value among all rosters ($562,919.24)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-04-14 |      0.650 | $5,000.00      | $3,247.52       |
| 2026-03-08 |      0.402 | $6,000.00      | $2,410.18       |
| 2026-02-24 |      0.324 | $2,000.00      | $647.32         |
| 2026-02-10 |      0.230 | $5,000.00      | $1,147.75       |
| 2026-02-01 |      0.170 | $1,000.00      | $169.74         |
| 2026-01-11 |      0.030 | $3,000.00      | $89.52          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
