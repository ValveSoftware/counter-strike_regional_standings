### Roster Details<br />
Team Name: NomadS<br />
Roster: ariucle, clouden, HenX, hoolig4n<br />
Global Rank: [253](../../standings_global_2026_03_02.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_03_02.md)<br />
Regional Rank: [33]( ../../standings_asia_2026_03_02.md)<br />
<br />
Final Rank Value:  593.9<br />
<br />
Final Rank Value (593.9) = Starting Rank Value (622.1) + Head To Head Adjustments (-28.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.264[<sup>1</sup>](#table2)
- Bounty Collected: 0.201[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.001[<sup>2</sup>](#table1)

The average of these factors is 0.117<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 622.1
- 400 + ( ( 0.117 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 622.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           21 |      436 | 2026-02-19 | The QUBE          | L   | 1.000      | -            | -                | -                | -         |   -13.48 | ariucle, clouden, HenX, hoolig4n, kani        |
|           20 |      488 | 2026-02-18 | Chinggis Warriors | L   | 1.000      | -            | -                | -                | -         |    -6.21 | ariucle, clouden, HenX, hoolig4n, kani        |
|           19 |      559 | 2026-02-17 | Just Swing        | W   | 1.000      | 0.333        | 0.003 (0.001)    | 0.082 (0.027)    | 0 (0.000) |    18.55 | ariucle, clouden, HenX, hoolig4n, kani        |
|           18 |     1004 | 2026-02-06 | Rare Atom         | L   | 1.000      | -            | -                | -                | -         |    -3.37 | ariucle, clouden, HenX, hoolig4n, sergelen19k |
|           17 |     1025 | 2026-02-05 | BMZ               | L   | 1.000      | -            | -                | -                | -         |    -9.03 | ariucle, clouden, HenX, hoolig4n, sergelen19k |
|           16 |     1031 | 2026-02-05 | The Huns          | L   | 1.000      | -            | -                | -                | -         |    -2.18 | ariucle, clouden, HenX, hoolig4n, sergelen19k |
|           15 |     3454 | 2025-10-24 | BORING PLAYERS    | L   | 0.339      | -            | -                | -                | -         |    -4.22 | bladee, clouden, HenX, hoolig4n, me1o         |
|           14 |     3500 | 2025-10-23 | ScarX             | L   | 0.333      | -            | -                | -                | -         |    -5.68 | bladee, clouden, HenX, hoolig4n, me1o         |
|           13 |     3968 | 2025-10-07 | Last Bullet       | L   | 0.226      | -            | -                | -                | -         |    -2.63 | clouden, hasteka, HenX, hoolig4n, shigeru     |
|           12 |     4029 | 2025-10-06 | Morningstar       | L   | 0.219      | -            | -                | -                | -         |    -0.87 | clouden, hasteka, HenX, hoolig4n, shigeru     |
|           11 |     4089 | 2025-10-05 | ScarX             | W   | 0.213      | 0.333        | 0.000 (0.000)    | 0.098 (0.007)    | 0 (0.000) |     3.10 | clouden, hasteka, HenX, hoolig4n, shigeru     |
|           10 |     4219 | 2025-10-02 | Chinggis Warriors | L   | 0.192      | -            | -                | -                | -         |    -1.44 | clouden, hasteka, HenX, hoolig4n, me1o        |
|            9 |     4226 | 2025-10-02 | The Huns          | L   | 0.191      | -            | -                | -                | -         |    -0.33 | clouden, hasteka, HenX, hoolig4n, IZR         |
|            8 |     4896 | 2025-09-13 | Chinggis Warriors | L   | 0.065      | -            | -                | -                | -         |    -1.01 | clouden, hasteka, HenX, hoolig4n, IZR         |
|            7 |     4982 | 2025-09-11 | The Huns          | L   | 0.053      | -            | -                | -                | -         |    -0.09 | clouden, hasteka, HenX, hoolig4n, IZR         |
|            6 |     5032 | 2025-09-10 | Just Swing        | W   | 0.046      | 0.333        | 0.003 (0.000)    | 0.082 (0.001)    | 0 (0.000) |     0.85 | clouden, hasteka, HenX, hoolig4n, IZR         |
|            5 |     5090 | 2025-09-09 | True Thunder      | W   | 0.039      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.28 | clouden, hasteka, HenX, hoolig4n, IZR         |
|            4 |     5129 | 2025-09-08 | Legion            | L   | 0.033      | -            | -                | -                | -         |    -0.44 | clouden, hasteka, HenX, hoolig4n, IZR         |
|            3 |     5200 | 2025-09-05 | The Huns          | L   | 0.017      | -            | -                | -                | -         |    -0.03 | clouden, hasteka, HenX, hoolig4n, IZR         |
|            2 |     5212 | 2025-09-05 | IHC               | W   | 0.012      | 0.333        | 0.000 (0.000)    | 0.014 (0.000)    | 1 (0.012) |     0.17 | clouden, hasteka, HenX, hoolig4n, IZR         |
|            1 |     5221 | 2025-09-04 | Chinggis Warriors | L   | 0.010      | -            | -                | -                | -         |    -0.15 | clouden, hasteka, HenX, hoolig4n, IZR         |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($536.27)
- Divide that value by the 5th highest value among all rosters ($334,320.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-02-06 |      1.000 | $225.00        | $225.00         |
| 2025-10-02 |      0.193 | $1,500.00      | $288.96         |
| 2025-09-06 |      0.018 | $1,250.00      | $22.31          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
