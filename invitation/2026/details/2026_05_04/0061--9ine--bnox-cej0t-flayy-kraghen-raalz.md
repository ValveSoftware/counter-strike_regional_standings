### Roster Details<br />
Team Name: 9INE<br />
Roster: bnox, cej0t, flayy, kraghen, raalz<br />
Global Rank: [61](../../standings_global_2026_05_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_05_04.md)<br />
Regional Rank: [41]( ../../standings_europe_2026_05_04.md)<br />
<br />
Final Rank Value:  1198.9<br />
<br />
Final Rank Value (1198.9) = Starting Rank Value (1293.0) + Head To Head Adjustments (-94.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.441[<sup>1</sup>](#table2)
- Bounty Collected: 0.372[<sup>2</sup>](#table1)
- Opponent Network: 0.251[<sup>2</sup>](#table1)
- LAN Wins: 0.860[<sup>2</sup>](#table1)

The average of these factors is 0.481<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1293.0
- 400 + ( ( 0.481 - 0.000 ) / ( 0.862 - 0.000 ) ) * 1600 = 1293.0


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
|           56 |      103 | 2026-04-30 | BET-M           | L   | 1.000      | -            | -                | -                | -         |   -15.51 | adamS, bnox, flayy, kraghen, raalz  |
|           55 |      277 | 2026-04-26 | Gentle Mates    | L   | 1.000      | -            | -                | -                | -         |   -10.95 | bnox, cej0t, flayy, kraghen, raalz  |
|           54 |      351 | 2026-04-25 | HYPERSPIRIT     | W   | 1.000      | 0.435        | -                | 0.603 (0.262)    | 1 (1.000) |     7.29 | bnox, cej0t, flayy, kraghen, raalz  |
|           53 |      372 | 2026-04-24 | Dripmen         | L   | 1.000      | -            | -                | -                | -         |   -29.57 | bnox, cej0t, flayy, kraghen, raalz  |
|           52 |      391 | 2026-04-23 | Misa            | L   | 1.000      | -            | -                | -                | -         |   -29.20 | bnox, cej0t, flayy, kraghen, raalz  |
|           51 |     1008 | 2026-04-03 | BetBoom         | L   | 0.992      | -            | -                | -                | -         |    -8.00 | bnox, cej0t, flayy, kraghen, raalz  |
|           50 |     1096 | 2026-04-02 | Gentle Mates    | W   | 0.986      | 0.500        | 0.100 (0.049)    | 0.438 (0.216)    | 1 (0.986) |    18.98 | bnox, cej0t, flayy, kraghen, raalz  |
|           49 |     1170 | 2026-04-01 | GamerLegion     | L   | 0.980      | -            | -                | -                | -         |    -5.64 | bnox, cej0t, flayy, kraghen, raalz  |
|           48 |     1665 | 2026-03-25 | Monte           | L   | 0.933      | -            | -                | -                | -         |    -6.31 | bnox, cej0t, flayy, kraghen, raalz  |
|           47 |     1690 | 2026-03-24 | OG              | W   | 0.928      | -            | -                | -                | 1 (0.928) |    10.49 | bnox, cej0t, flayy, kraghen, raalz  |
|           46 |     1715 | 2026-03-24 | Inner Circle    | L   | 0.926      | -            | -                | -                | -         |   -15.29 | bnox, cej0t, flayy, kraghen, raalz  |
|           45 |     1726 | 2026-03-24 | INFINITE Talent | W   | 0.926      | -            | -                | -                | 1 (0.926) |     0.21 | bnox, cej0t, flayy, kraghen, raalz  |
|           44 |     2208 | 2026-03-14 | Alliance        | L   | 0.861      | -            | -                | -                | -         |   -10.38 | bnox, cej0t, flayy, kraghen, raalz  |
|           43 |     2329 | 2026-03-12 | Rebels          | W   | 0.846      | 0.350        | -                | 0.674 (0.200)    | 1 (0.846) |     6.60 | bnox, cej0t, flayy, kraghen, raalz  |
|           42 |     2335 | 2026-03-12 | NIC             | W   | 0.846      | -            | -                | -                | 1 (0.846) |     0.18 | bnox, cej0t, flayy, kraghen, raalz  |
|           41 |     2341 | 2026-03-12 | M80             | L   | 0.845      | -            | -                | -                | -         |    -8.74 | bnox, cej0t, flayy, kraghen, raalz  |
|           40 |     2346 | 2026-03-12 | JiJieHao        | W   | 0.845      | -            | -                | -                | 1 (0.845) |     9.61 | bnox, cej0t, flayy, kraghen, raalz  |
|           39 |     2505 | 2026-03-08 | FOKUS           | W   | 0.822      | 0.435        | 0.084 (0.030)    | -                | -         |    17.81 | bnox, cej0t, flayy, kraghen, raalz  |
|           38 |     2582 | 2026-03-07 | fnatic          | W   | 0.814      | 0.435        | -                | 0.499 (0.177)    | -         |     8.80 | bnox, cej0t, flayy, kraghen, raalz  |
|           37 |     2692 | 2026-03-05 | Tricked         | W   | 0.800      | 0.435        | 0.027 (0.009)    | 0.545 (0.189)    | -         |    12.76 | bnox, cej0t, flayy, kraghen, raalz  |
|           36 |     2930 | 2026-02-28 | BetBoom         | L   | 0.765      | -            | -                | -                | -         |    -6.09 | bnox, cej0t, kraghen, raalz, shield |
|           35 |     2957 | 2026-02-27 | EYEBALLERS      | L   | 0.760      | -            | -                | -                | -         |    -6.09 | bnox, cej0t, kraghen, raalz, shield |
|           34 |     3045 | 2026-02-26 | Tricked         | W   | 0.752      | 0.769        | 0.027 (0.015)    | 0.545 (0.315)    | -         |    12.66 | bnox, cej0t, kraghen, raalz, shield |
|           33 |     3207 | 2026-02-22 | illwill         | L   | 0.727      | -            | -                | -                | -         |   -11.50 | bnox, cej0t, kraghen, raalz, shield |
|           32 |     3218 | 2026-02-22 | Sashi           | W   | 0.727      | -            | -                | -                | 1 (0.727) |     9.53 | bnox, cej0t, kraghen, raalz, shield |
|           31 |     3236 | 2026-02-22 | BC.Game         | L   | 0.726      | -            | -                | -                | -         |   -11.77 | bnox, cej0t, kraghen, raalz, shield |
|           30 |     3242 | 2026-02-22 | MASONIC         | L   | 0.726      | -            | -                | -                | -         |   -18.42 | bnox, cej0t, kraghen, raalz, shield |
|           29 |     3254 | 2026-02-22 | BOSS            | W   | 0.726      | -            | -                | -                | 1 (0.726) |     3.22 | bnox, cej0t, kraghen, raalz, shield |
|           28 |     3665 | 2026-02-14 | HOTU            | L   | 0.673      | -            | -                | -                | -         |    -8.36 | bnox, cej0t, kraghen, raalz, shield |
|           27 |     3719 | 2026-02-13 | JiJieHao        | W   | 0.667      | -            | -                | -                | 1 (0.667) |     8.29 | bnox, cej0t, kraghen, raalz, shield |
|           26 |     3766 | 2026-02-12 | PCIFIC          | W   | 0.660      | -            | -                | -                | -         |     0.15 | bnox, cej0t, kraghen, raalz, shield |
|           25 |     3990 | 2026-02-05 | ex-RUBY         | L   | 0.613      | -            | -                | -                | -         |   -15.71 | bnox, cej0t, kraghen, raalz, shield |
|           24 |     4008 | 2026-02-04 | TNC             | W   | 0.608      | 0.435        | 0.027 (0.007)    | 1.000 (0.264)    | -         |     3.87 | bnox, cej0t, kraghen, raalz, shield |
|           23 |     4012 | 2026-02-04 | Nuclear TigeRES | L   | 0.607      | -            | -                | -                | -         |   -10.02 | bnox, cej0t, kraghen, raalz, shield |
|           22 |     4075 | 2026-02-02 | MOUZ NXT        | W   | 0.593      | 0.435        | 0.028 (0.007)    | 1.000 (0.258)    | -         |     4.95 | bnox, cej0t, kraghen, raalz, shield |
|           21 |     4361 | 2026-01-23 | Gentle Mates    | L   | 0.527      | -            | -                | -                | -         |    -7.50 | bnox, cej0t, kraghen, raalz, shield |
|           20 |     4401 | 2026-01-22 | Nuclear TigeRES | W   | 0.522      | 0.769        | 0.046 (0.018)    | 0.733 (0.294)    | -         |     7.76 | bnox, cej0t, kraghen, raalz, shield |
|           19 |     4418 | 2026-01-22 | HOTU            | L   | 0.520      | -            | -                | -                | -         |    -6.57 | bnox, cej0t, kraghen, raalz, shield |
|           18 |     4441 | 2026-01-21 | BIG Academy     | W   | 0.515      | -            | -                | -                | -         |     1.03 | bnox, cej0t, kraghen, raalz, shield |
|           17 |     4474 | 2026-01-21 | K27             | W   | 0.513      | 0.769        | 0.127 (0.050)    | 0.860 (0.339)    | -         |    10.44 | bnox, cej0t, kraghen, raalz, shield |
|           16 |     4616 | 2026-01-16 | FURIA           | L   | 0.481      | -            | -                | -                | -         |    -0.83 | bnox, cej0t, kraghen, raalz, shield |
|           15 |     4783 | 2026-01-04 | NRG             | L   | 0.404      | -            | -                | -                | -         |    -4.99 | bnox, cej0t, kraghen, raalz, shield |
|           14 |     4785 | 2026-01-04 | M80             | W   | 0.401      | 0.323        | 0.081 (0.011)    | -                | -         |     8.51 | bnox, cej0t, kraghen, raalz, shield |
|           13 |     4797 | 2026-01-04 | Wildcard        | W   | 0.400      | -            | -                | -                | -         |     0.23 | bnox, cej0t, kraghen, raalz, shield |
|           12 |     4828 | 2026-01-03 | Venom           | W   | 0.396      | -            | -                | -                | -         |     0.55 | bnox, cej0t, kraghen, raalz, shield |
|           11 |     4833 | 2026-01-03 | Memeories       | W   | 0.395      | -            | -                | -                | -         |     0.15 | bnox, cej0t, kraghen, raalz, shield |
|           10 |     4914 | 2025-12-20 | Walczaki        | L   | 0.299      | -            | -                | -                | -         |    -6.60 | bnox, cej0t, kraghen, phzy, raalz   |
|            9 |     4921 | 2025-12-19 | Venom           | W   | 0.295      | -            | -                | -                | -         |     0.38 | bnox, cej0t, kraghen, phzy, raalz   |
|            8 |     4929 | 2025-12-19 | The Huns        | W   | 0.294      | -            | -                | -                | -         |     2.92 | bnox, cej0t, kraghen, phzy, raalz   |
|            7 |     4934 | 2025-12-19 | BESTIA          | L   | 0.292      | -            | -                | -                | -         |    -3.92 | bnox, cej0t, kraghen, phzy, raalz   |
|            6 |     4949 | 2025-12-18 | Nexus           | W   | 0.287      | -            | -                | -                | -         |     1.02 | bnox, cej0t, kraghen, phzy, raalz   |
|            5 |     4998 | 2025-12-14 | BIG             | L   | 0.260      | -            | -                | -                | -         |    -1.98 | bnox, cej0t, kraghen, phzy, raalz   |
|            4 |     5011 | 2025-12-13 | Alliance        | W   | 0.252      | 0.435        | 0.082 (0.009)    | -                | -         |     5.27 | bnox, cej0t, kraghen, phzy, raalz   |
|            3 |     5031 | 2025-12-12 | Lavked          | W   | 0.245      | -            | -                | -                | -         |     0.80 | bnox, cej0t, kraghen, phzy, raalz   |
|            2 |     5133 | 2025-12-06 | CYBERSHOKE      | L   | 0.205      | -            | -                | -                | -         |    -4.10 | bnox, cej0t, kraghen, phzy, raalz   |
|            1 |     5298 | 2025-11-29 | GenOne          | L   | 0.160      | -            | -                | -                | -         |    -4.61 | bnox, cej0t, kraghen, MoDo, raalz   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($25,398.76)
- Divide that value by the 5th highest value among all rosters ($468,528.41)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-04-26 |      1.000 | $6,000.00      | $6,000.00       |
| 2026-04-04 |      1.000 | $9,000.00      | $9,000.00       |
| 2026-02-14 |      0.674 | $3,125.00      | $2,107.30       |
| 2026-02-06 |      0.621 | $2,000.00      | $1,242.26       |
| 2026-02-05 |      0.614 | $2,000.00      | $1,227.26       |
| 2026-01-18 |      0.494 | $7,500.00      | $3,708.65       |
| 2026-01-04 |      0.404 | $2,000.00      | $807.50         |
| 2025-12-14 |      0.261 | $5,000.00      | $1,305.79       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
