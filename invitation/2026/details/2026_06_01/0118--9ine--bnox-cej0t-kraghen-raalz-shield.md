### Roster Details<br />
Team Name: 9INE<br />
Roster: bnox, cej0t, kraghen, raalz, shield<br />
Global Rank: [118](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_01.md)<br />
Regional Rank: [78]( ../../standings_europe_2026_06_01.md)<br />
<br />
Final Rank Value:  992.8<br />
<br />
Final Rank Value (992.8) = Starting Rank Value (925.9) + Head To Head Adjustments (66.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.334[<sup>1</sup>](#table2)
- Bounty Collected: 0.323[<sup>2</sup>](#table1)
- Opponent Network: 0.131[<sup>2</sup>](#table1)
- LAN Wins: 0.317[<sup>2</sup>](#table1)

The average of these factors is 0.276<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 925.9
- 400 + ( ( 0.276 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 925.9


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
|           35 |     3916 | 2026-02-28 | BetBoom         | L   | 0.578      | -            | -                | -                | -         |    -0.93 | bnox, cej0t, kraghen, raalz, shield |
|           34 |     3943 | 2026-02-27 | EYEBALLERS      | L   | 0.574      | -            | -                | -                | -         |    -1.79 | bnox, cej0t, kraghen, raalz, shield |
|           33 |     4031 | 2026-02-26 | Tricked         | W   | 0.565      | 0.769        | 0.034 (0.015)    | 0.574 (0.249)    | -         |    14.70 | bnox, cej0t, kraghen, raalz, shield |
|           32 |     4193 | 2026-02-22 | illwill         | L   | 0.541      | -            | -                | -                | -         |    -4.65 | bnox, cej0t, kraghen, raalz, shield |
|           31 |     4204 | 2026-02-22 | Sashi           | W   | 0.540      | 0.342        | 0.008 (0.001)    | 0.517 (0.095)    | 1 (0.540) |    12.66 | bnox, cej0t, kraghen, raalz, shield |
|           30 |     4222 | 2026-02-22 | BC.Game         | L   | 0.540      | -            | -                | -                | -         |    -5.28 | bnox, cej0t, kraghen, raalz, shield |
|           29 |     4228 | 2026-02-22 | MASONIC         | L   | 0.539      | -            | -                | -                | -         |    -6.83 | bnox, cej0t, kraghen, raalz, shield |
|           28 |     4240 | 2026-02-22 | BOSS            | W   | 0.539      | 0.342        | -                | 0.286 (0.053)    | 1 (0.539) |     6.48 | bnox, cej0t, kraghen, raalz, shield |
|           27 |     4651 | 2026-02-14 | HOTU            | L   | 0.487      | -            | -                | -                | -         |    -1.36 | bnox, cej0t, kraghen, raalz, shield |
|           26 |     4705 | 2026-02-13 | JiJieHao        | W   | 0.480      | 0.384        | 0.061 (0.011)    | 0.566 (0.104)    | 1 (0.480) |    13.63 | bnox, cej0t, kraghen, raalz, shield |
|           25 |     4752 | 2026-02-12 | PCIFIC          | W   | 0.474      | -            | -                | -                | 1 (0.474) |     0.60 | bnox, cej0t, kraghen, raalz, shield |
|           24 |     4976 | 2026-02-05 | ex-RUBY         | L   | 0.426      | -            | -                | -                | -         |    -6.73 | bnox, cej0t, kraghen, raalz, shield |
|           23 |     4994 | 2026-02-04 | TNC             | W   | 0.421      | 0.435        | 0.022 (0.004)    | 1.000 (0.183)    | -         |     7.61 | bnox, cej0t, kraghen, raalz, shield |
|           22 |     4998 | 2026-02-04 | Nuclear TigeRES | L   | 0.420      | -            | -                | -                | -         |    -1.47 | bnox, cej0t, kraghen, raalz, shield |
|           21 |     5061 | 2026-02-02 | MOUZ NXT        | W   | 0.406      | 0.435        | 0.015 (0.003)    | 0.814 (0.144)    | -         |     8.24 | bnox, cej0t, kraghen, raalz, shield |
|           20 |     5347 | 2026-01-23 | Gentle Mates    | L   | 0.341      | -            | -                | -                | -         |    -0.83 | bnox, cej0t, kraghen, raalz, shield |
|           19 |     5387 | 2026-01-22 | Nuclear TigeRES | W   | 0.335      | 0.769        | 0.047 (0.012)    | 0.748 (0.193)    | -         |     9.54 | bnox, cej0t, kraghen, raalz, shield |
|           18 |     5404 | 2026-01-22 | HOTU            | L   | 0.334      | -            | -                | -                | -         |    -0.76 | bnox, cej0t, kraghen, raalz, shield |
|           17 |     5427 | 2026-01-21 | BIG Academy     | W   | 0.329      | 0.769        | -                | 0.297 (0.075)    | -         |     2.59 | bnox, cej0t, kraghen, raalz, shield |
|           16 |     5460 | 2026-01-21 | K27             | W   | 0.326      | 0.769        | 0.095 (0.024)    | 0.689 (0.173)    | -         |     9.49 | bnox, cej0t, kraghen, raalz, shield |
|           15 |     5602 | 2026-01-16 | FURIA           | L   | 0.294      | -            | -                | -                | -         |    -0.11 | bnox, cej0t, kraghen, raalz, shield |
|           14 |     5769 | 2026-01-04 | NRG             | L   | 0.217      | -            | -                | -                | -         |    -1.20 | bnox, cej0t, kraghen, raalz, shield |
|           13 |     5771 | 2026-01-04 | M80             | W   | 0.215      | 0.323        | 0.068 (0.005)    | 0.543 (0.038)    | 1 (0.215) |     6.14 | bnox, cej0t, kraghen, raalz, shield |
|           12 |     5783 | 2026-01-04 | Wildcard        | W   | 0.214      | -            | -                | -                | 1 (0.214) |     0.67 | bnox, cej0t, kraghen, raalz, shield |
|           11 |     5814 | 2026-01-03 | Venom           | W   | 0.209      | -            | -                | -                | 1 (0.209) |     0.69 | bnox, cej0t, kraghen, raalz, shield |
|           10 |     5819 | 2026-01-03 | Memeories       | W   | 0.208      | -            | -                | -                | 1 (0.208) |     0.47 | bnox, cej0t, kraghen, raalz, shield |
|            9 |     5900 | 2025-12-20 | Walczaki        | L   | 0.113      | -            | -                | -                | -         |    -0.72 | bnox, cej0t, kraghen, phzy, raalz   |
|            8 |     5907 | 2025-12-19 | Venom           | W   | 0.108      | -            | -                | -                | 1 (0.108) |     0.35 | bnox, cej0t, kraghen, phzy, raalz   |
|            7 |     5915 | 2025-12-19 | The Huns        | W   | 0.107      | 0.339        | 0.045 (0.002)    | -                | 1 (0.107) |     2.75 | bnox, cej0t, kraghen, phzy, raalz   |
|            6 |     5920 | 2025-12-19 | BESTIA          | L   | 0.106      | -            | -                | -                | -         |    -0.45 | bnox, cej0t, kraghen, phzy, raalz   |
|            5 |     5935 | 2025-12-18 | Nexus           | W   | 0.100      | -            | -                | -                | -         |     0.87 | bnox, cej0t, kraghen, phzy, raalz   |
|            4 |     5984 | 2025-12-14 | BIG             | L   | 0.073      | -            | -                | -                | -         |    -0.17 | bnox, cej0t, kraghen, phzy, raalz   |
|            3 |     5997 | 2025-12-13 | Alliance        | W   | 0.065      | 0.435        | 0.100 (0.003)    | -                | -         |     1.94 | bnox, cej0t, kraghen, phzy, raalz   |
|            2 |     6017 | 2025-12-12 | Lavked          | W   | 0.058      | -            | -                | -                | -         |     0.85 | bnox, cej0t, kraghen, phzy, raalz   |
|            1 |     6119 | 2025-12-06 | CYBERSHOKE      | L   | 0.019      | -            | -                | -                | -         |    -0.10 | bnox, cej0t, kraghen, phzy, raalz   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,364.16)
- Divide that value by the 5th highest value among all rosters ($624,406.38)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-02-14 |      0.488 | $3,125.00      | $1,524.27       |
| 2026-02-06 |      0.435 | $2,000.00      | $869.12         |
| 2026-02-05 |      0.427 | $2,000.00      | $854.12         |
| 2026-01-18 |      0.308 | $7,500.00      | $2,309.36       |
| 2026-01-04 |      0.217 | $2,000.00      | $434.36         |
| 2025-12-14 |      0.075 | $5,000.00      | $372.93         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
