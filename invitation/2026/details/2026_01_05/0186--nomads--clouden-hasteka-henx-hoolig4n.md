### Roster Details<br />
Team Name: NomadS<br />
Roster: clouden, hasteka, HenX, hoolig4n<br />
Global Rank: [186](../../standings_global_2026_01_05.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_01_05.md)<br />
Regional Rank: [24]( ../../standings_asia_2026_01_05.md)<br />
<br />
Final Rank Value:  693.7<br />
<br />
Final Rank Value (693.7) = Starting Rank Value (699.7) + Head To Head Adjustments (-6.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.297[<sup>1</sup>](#table2)
- Bounty Collected: 0.248[<sup>2</sup>](#table1)
- Opponent Network: 0.018[<sup>2</sup>](#table1)
- LAN Wins: 0.041[<sup>2</sup>](#table1)

The average of these factors is 0.151<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 699.7
- 400 + ( ( 0.151 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 699.7


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
|           26 |     1674 | 2025-10-24 | BORING PLAYERS    | L   | 0.713      | -            | -                | -                | -         |    -8.62 | bladee, clouden, HenX, hoolig4n, me1o         |
|           25 |     1720 | 2025-10-23 | ScarX             | L   | 0.706      | -            | -                | -                | -         |   -13.36 | bladee, clouden, HenX, hoolig4n, me1o         |
|           24 |     2188 | 2025-10-07 | Last Bullet       | L   | 0.600      | -            | -                | -                | -         |    -8.02 | clouden, hasteka, HenX, hoolig4n, shigeru     |
|           23 |     2249 | 2025-10-06 | Morningstar       | L   | 0.593      | -            | -                | -                | -         |    -2.07 | clouden, hasteka, HenX, hoolig4n, shigeru     |
|           22 |     2309 | 2025-10-05 | ScarX             | W   | 0.586      | 0.333        | 0.002 (0.000)    | 0.075 (0.015)    | 0 (0.000) |     7.38 | clouden, hasteka, HenX, hoolig4n, shigeru     |
|           21 |     2439 | 2025-10-02 | Chinggis Warriors | L   | 0.565      | -            | -                | -                | -         |    -4.73 | clouden, hasteka, HenX, hoolig4n, me1o        |
|           20 |     2446 | 2025-10-02 | The Huns          | L   | 0.564      | -            | -                | -                | -         |    -1.72 | clouden, hasteka, HenX, hoolig4n, IZR         |
|           19 |     3116 | 2025-09-13 | Chinggis Warriors | L   | 0.439      | -            | -                | -                | -         |    -3.58 | clouden, hasteka, HenX, hoolig4n, IZR         |
|           18 |     3202 | 2025-09-11 | The Huns          | L   | 0.426      | -            | -                | -                | -         |    -1.35 | clouden, hasteka, HenX, hoolig4n, IZR         |
|           17 |     3252 | 2025-09-10 | Just Swing        | W   | 0.420      | 0.333        | 0.005 (0.001)    | 0.219 (0.031)    | 0 (0.000) |     7.15 | clouden, hasteka, HenX, hoolig4n, IZR         |
|           16 |     3310 | 2025-09-09 | True Thunder      | W   | 0.412      | 0.333        | 0.000 (0.000)    | -                | 0 (0.000) |     1.83 | clouden, hasteka, HenX, hoolig4n, IZR         |
|           15 |     3349 | 2025-09-08 | Legion            | L   | 0.406      | -            | -                | -                | -         |    -7.71 | clouden, hasteka, HenX, hoolig4n, IZR         |
|           14 |     3420 | 2025-09-05 | The Huns          | L   | 0.390      | -            | -                | -                | -         |    -1.21 | clouden, hasteka, HenX, hoolig4n, IZR         |
|           13 |     3432 | 2025-09-05 | IHC               | W   | 0.386      | 0.333        | 0.001 (0.000)    | 0.046 (0.006)    | 1 (0.386) |     4.26 | clouden, hasteka, HenX, hoolig4n, IZR         |
|           12 |     3441 | 2025-09-04 | Chinggis Warriors | L   | 0.383      | -            | -                | -                | -         |    -3.39 | clouden, hasteka, HenX, hoolig4n, IZR         |
|           11 |     3589 | 2025-08-28 | Rare Atom         | L   | 0.333      | -            | -                | -                | -         |    -0.70 | clouden, hasteka, HenX, hoolig4n, IZR         |
|           10 |     3646 | 2025-08-26 | The Huns          | W   | 0.319      | 0.333        | 0.030 (0.003)    | 0.459 (0.049)    | 0 (0.000) |     9.16 | clouden, hasteka, HenX, hoolig4n, IZR         |
|            9 |     3910 | 2025-08-15 | Last Bullet       | W   | 0.246      | 0.333        | 0.004 (0.000)    | 0.173 (0.014)    | 0 (0.000) |     4.50 | clouden, hasteka, HenX, hoolig4n, IZR         |
|            8 |     3951 | 2025-08-14 | Morningstar       | W   | 0.240      | 0.333        | 0.026 (0.002)    | 0.352 (0.028)    | 0 (0.000) |     6.84 | clouden, hasteka, HenX, hoolig4n, IZR         |
|            7 |     4006 | 2025-08-13 | BORING PLAYERS    | W   | 0.233      | 0.333        | 0.003 (0.000)    | 0.153 (0.012)    | 0 (0.000) |     4.53 | clouden, hasteka, HenX, hoolig4n, IZR         |
|            6 |     4058 | 2025-08-12 | Lynn Vision       | L   | 0.226      | -            | -                | -                | -         |    -0.38 | clouden, hasteka, HenX, hoolig4n, IZR         |
|            5 |     4108 | 2025-08-11 | FengDa            | W   | 0.219      | 0.333        | 0.026 (0.002)    | 0.363 (0.027)    | 0 (0.000) |     5.75 | clouden, hasteka, HenX, hoolig4n, IZR         |
|            4 |     4651 | 2025-07-13 | IHC               | L   | 0.025      | -            | -                | -                | -         |    -0.59 | clouden, HenX, hoolig4n, Paranormal, Randyyyy |
|            3 |     4669 | 2025-07-12 | Chinggis Warriors | L   | 0.019      | -            | -                | -                | -         |    -0.45 | clouden, HenX, hoolig4n, Paranormal, Randyyyy |
|            2 |     4674 | 2025-07-12 | ex-TALON          | W   | 0.018      | 0.624        | -                | 0.019 (0.000)    | 0 (0.000) |     0.14 | clouden, HenX, hoolig4n, Paranormal, Randyyyy |
|            1 |     4705 | 2025-07-11 | Morningstar       | W   | 0.013      | 0.624        | 0.026 (0.000)    | 0.352 (0.003)    | -         |     0.37 | clouden, HenX, hoolig4n, Paranormal, Randyyyy |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,847.37)
- Divide that value by the 5th highest value among all rosters ($428,700.42)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-10-02 |      0.566 | $1,500.00      | $849.13         |
| 2025-09-06 |      0.391 | $1,250.00      | $489.12         |
| 2025-08-29 |      0.339 | $1,500.00      | $509.12         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
