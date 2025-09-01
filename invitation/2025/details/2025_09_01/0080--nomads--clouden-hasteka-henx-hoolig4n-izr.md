### Roster Details<br />
Team Name: NomadS<br />
Roster: clouden, hasteka, HenX, hoolig4n, IZR<br />
Global Rank: [80](../../standings_global_2025_09_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_09_01.md)<br />
Regional Rank: [9]( ../../standings_asia_2025_09_01.md)<br />
<br />
Final Rank Value:  878.4<br />
<br />
Final Rank Value (878.4) = Starting Rank Value (789.7) + Head To Head Adjustments (88.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.348[<sup>1</sup>](#table2)
- Bounty Collected: 0.288[<sup>2</sup>](#table1)
- Opponent Network: 0.068[<sup>2</sup>](#table1)
- LAN Wins: 0.109[<sup>2</sup>](#table1)

The average of these factors is 0.203<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 789.7
- 400 + ( ( 0.203 - 0.000 ) / ( 0.834 - 0.000 ) ) * 1600 = 789.7


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
|           35 |       80 | 2025-08-28 | Rare Atom         | L   | 1.000      | -            | -                | -                | -         |    -4.84 | clouden, hasteka, HenX, hoolig4n, IZR         |
|           34 |      118 | 2025-08-26 | The Huns          | W   | 1.000      | 0.333        | 0.039 (0.013)    | 0.308 (0.103)    | 0 (0.000) |    25.02 | clouden, hasteka, HenX, hoolig4n, IZR         |
|           33 |      331 | 2025-08-15 | TBO               | W   | 1.000      | 0.333        | 0.008 (0.003)    | 0.200 (0.067)    | 0 (0.000) |    13.66 | clouden, hasteka, HenX, hoolig4n, IZR         |
|           32 |      364 | 2025-08-14 | Kaleido           | W   | 1.000      | 0.333        | 0.011 (0.004)    | 0.317 (0.106)    | 0 (0.000) |    20.43 | clouden, hasteka, HenX, hoolig4n, IZR         |
|           31 |      409 | 2025-08-13 | BORING PLAYERS    | W   | 1.000      | 0.333        | -                | 0.099 (0.033)    | 0 (0.000) |     6.80 | clouden, hasteka, HenX, hoolig4n, IZR         |
|           30 |      453 | 2025-08-12 | Lynn Vision       | L   | 1.000      | -            | -                | -                | -         |    -0.57 | clouden, hasteka, HenX, hoolig4n, IZR         |
|           29 |      495 | 2025-08-11 | FengDa            | W   | 1.000      | 0.333        | 0.003 (0.001)    | 0.247 (0.082)    | 0 (0.000) |    13.74 | clouden, hasteka, HenX, hoolig4n, IZR         |
|           28 |     1038 | 2025-07-13 | IHC               | L   | 0.865      | -            | -                | -                | -         |   -18.27 | clouden, HenX, hoolig4n, Paranormal, Randyyyy |
|           27 |     1056 | 2025-07-12 | Chinggis Warriors | L   | 0.859      | -            | -                | -                | -         |    -5.01 | clouden, HenX, hoolig4n, Paranormal, Randyyyy |
|           26 |     1061 | 2025-07-12 | ex-TALON          | W   | 0.858      | -            | -                | -                | 0 (0.000) |     8.40 | clouden, HenX, hoolig4n, Paranormal, Randyyyy |
|           25 |     1092 | 2025-07-11 | Kaleido           | W   | 0.853      | 0.143        | 0.011 (0.001)    | 0.317 (0.039)    | 0 (0.000) |    17.99 | clouden, HenX, hoolig4n, Paranormal, Randyyyy |
|           24 |     2090 | 2025-05-09 | Rare Atom         | L   | 0.432      | -            | -                | -                | -         |    -1.47 | clouden, HenX, hoolig4n, Paranormal, Randyyyy |
|           23 |     2149 | 2025-05-07 | FlyQuest          | L   | 0.418      | -            | -                | -                | -         |    -0.80 | clouden, HenX, hoolig4n, Paranormal, Randyyyy |
|           22 |     2326 | 2025-04-30 | SENZA             | L   | 0.372      | -            | -                | -                | -         |    -6.35 | clouden, HenX, hoolig4n, Paranormal, Randyyyy |
|           21 |     2352 | 2025-04-29 | The Huns          | L   | 0.366      | -            | -                | -                | -         |    -1.65 | clouden, HenX, hoolig4n, Paranormal, Randyyyy |
|           20 |     2389 | 2025-04-27 | Kaleido           | W   | 0.353      | 0.624        | 0.011 (0.002)    | 0.317 (0.070)    | 1 (0.353) |     7.72 | clouden, HenX, hoolig4n, Paranormal, Randyyyy |
|           19 |     2428 | 2025-04-26 | JiJieHao          | L   | 0.345      | -            | -                | -                | -         |    -2.92 | clouden, HenX, hoolig4n, Paranormal, Randyyyy |
|           18 |     2515 | 2025-04-20 | Chinggis Warriors | W   | 0.306      | 0.624        | 0.024 (0.005)    | 0.471 (0.090)    | 1 (0.306) |     7.93 | clouden, HenX, hoolig4n, Paranormal, Randyyyy |
|           17 |     2554 | 2025-04-18 | KZG               | W   | 0.292      | -            | -                | -                | 1 (0.292) |     2.09 | clouden, HenX, hoolig4n, Paranormal, Randyyyy |
|           16 |     2754 | 2025-04-09 | Chinggis Warriors | W   | 0.232      | 0.417        | 0.024 (0.002)    | 0.471 (0.046)    | -         |     6.11 | clouden, HenX, hoolig4n, Paranormal, Randyyyy |
|           15 |     2755 | 2025-04-09 | Chinggis Warriors | W   | 0.232      | 0.417        | 0.024 (0.002)    | 0.471 (0.046)    | -         |     6.17 | clouden, HenX, hoolig4n, Paranormal, Randyyyy |
|           14 |     2803 | 2025-04-08 | Lynn Vision       | L   | 0.226      | -            | -                | -                | -         |    -0.11 | clouden, HenX, hoolig4n, Paranormal, Randyyyy |
|           13 |     2807 | 2025-04-08 | Lynn Vision       | L   | 0.226      | -            | -                | -                | -         |    -0.11 | clouden, HenX, hoolig4n, Paranormal, Randyyyy |
|           12 |     2876 | 2025-04-05 | Eruption          | L   | 0.205      | -            | -                | -                | -         |    -2.51 | clouden, HenX, hoolig4n, Paranormal, Randyyyy |
|           11 |     2936 | 2025-04-02 | Eruption          | L   | 0.190      | -            | -                | -                | -         |    -2.36 | clouden, HenX, hoolig4n, Paranormal, Randyyyy |
|           10 |     2984 | 2025-04-02 | harizma           | L   | 0.186      | -            | -                | -                | -         |    -4.93 | clouden, HenX, hoolig4n, Paranormal, Randyyyy |
|            9 |     2990 | 2025-04-02 | harizma           | W   | 0.186      | -            | -                | -                | -         |     0.92 | clouden, HenX, hoolig4n, Paranormal, Randyyyy |
|            8 |     3036 | 2025-04-01 | SENZA             | W   | 0.179      | 0.417        | 0.008 (0.001)    | -                | -         |     2.74 | clouden, HenX, hoolig4n, Paranormal, Randyyyy |
|            7 |     3045 | 2025-04-01 | SENZA             | W   | 0.179      | -            | -                | -                | -         |     2.78 | clouden, HenX, hoolig4n, Paranormal, Randyyyy |
|            6 |     3330 | 2025-03-26 | Gods Reign        | W   | 0.139      | -            | -                | -                | -         |     1.32 | clouden, CRYTICAL, HenX, hoolig4n, Paranormal |
|            5 |     3338 | 2025-03-26 | Gods Reign        | W   | 0.139      | -            | -                | -                | -         |     1.33 | clouden, CRYTICAL, HenX, hoolig4n, Paranormal |
|            4 |     3376 | 2025-03-25 | The QUBE          | L   | 0.133      | -            | -                | -                | -         |    -3.46 | clouden, CRYTICAL, HenX, hoolig4n, Paranormal |
|            3 |     3382 | 2025-03-25 | The QUBE          | W   | 0.133      | -            | -                | -                | -         |     0.72 | clouden, CRYTICAL, HenX, hoolig4n, Paranormal |
|            2 |     3618 | 2025-03-15 | IHC               | L   | 0.070      | -            | -                | -                | -         |    -1.53 | clouden, CRYTICAL, HenX, hoolig4n, Paranormal |
|            1 |     3646 | 2025-03-15 | The Huns          | L   | 0.066      | -            | -                | -                | -         |    -0.26 | clouden, CRYTICAL, HenX, hoolig4n, Paranormal |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,604.69)
- Divide that value by the 5th highest value among all rosters ($421,876.14)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-08-29 |      1.000 | $1,500.00      | $1,500.00       |
| 2025-05-16 |      0.480 | $7,000.00      | $3,357.73       |
| 2025-05-04 |      0.399 | $1,300.00      | $518.67         |
| 2025-04-03 |      0.192 | $1,000.00      | $192.14         |
| 2025-03-16 |      0.072 | $500.00        | $36.15          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
