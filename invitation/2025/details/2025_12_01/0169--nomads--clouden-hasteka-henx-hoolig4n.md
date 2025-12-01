### Roster Details<br />
Team Name: NomadS<br />
Roster: clouden, hasteka, HenX, hoolig4n<br />
Global Rank: [169](../../standings_global_2025_12_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_12_01.md)<br />
Regional Rank: [21]( ../../standings_asia_2025_12_01.md)<br />
<br />
Final Rank Value:  711.1<br />
<br />
Final Rank Value (711.1) = Starting Rank Value (720.7) + Head To Head Adjustments (-9.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.302[<sup>1</sup>](#table2)
- Bounty Collected: 0.264[<sup>2</sup>](#table1)
- Opponent Network: 0.045[<sup>2</sup>](#table1)
- LAN Wins: 0.062[<sup>2</sup>](#table1)

The average of these factors is 0.168<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 720.7
- 400 + ( ( 0.168 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 720.7


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
|           26 |     1114 | 2025-10-24 | BORING PLAYERS    | L   | 0.946      | -            | -                | -                | -         |   -11.94 | bladee, clouden, HenX, hoolig4n, me1o         |
|           25 |     1160 | 2025-10-23 | ScarX             | L   | 0.939      | -            | -                | -                | -         |   -18.34 | bladee, clouden, HenX, hoolig4n, me1o         |
|           24 |     1628 | 2025-10-07 | Last Bullet       | L   | 0.833      | -            | -                | -                | -         |   -11.45 | clouden, hasteka, HenX, hoolig4n, shigeru     |
|           23 |     1689 | 2025-10-06 | Kaleido           | L   | 0.826      | -            | -                | -                | -         |    -4.80 | clouden, hasteka, HenX, hoolig4n, shigeru     |
|           22 |     1749 | 2025-10-05 | ScarX             | W   | 0.819      | 0.333        | 0.003 (0.001)    | 0.105 (0.029)    | 0 (0.000) |     9.50 | clouden, hasteka, HenX, hoolig4n, shigeru     |
|           21 |     1879 | 2025-10-02 | Chinggis Warriors | L   | 0.799      | -            | -                | -                | -         |    -6.32 | clouden, hasteka, HenX, hoolig4n, me1o        |
|           20 |     1886 | 2025-10-02 | The Huns          | L   | 0.797      | -            | -                | -                | -         |    -3.39 | clouden, hasteka, HenX, hoolig4n, IZR         |
|           19 |     2556 | 2025-09-13 | Chinggis Warriors | L   | 0.672      | -            | -                | -                | -         |    -4.88 | clouden, hasteka, HenX, hoolig4n, IZR         |
|           18 |     2642 | 2025-09-11 | The Huns          | L   | 0.659      | -            | -                | -                | -         |    -3.03 | clouden, hasteka, HenX, hoolig4n, IZR         |
|           17 |     2692 | 2025-09-10 | Just Swing        | W   | 0.653      | 0.333        | 0.004 (0.001)    | 0.235 (0.051)    | 0 (0.000) |     8.75 | clouden, hasteka, HenX, hoolig4n, IZR         |
|           16 |     2750 | 2025-09-09 | True Thunder      | W   | 0.645      | 0.333        | 0.000 (0.000)    | -                | 0 (0.000) |     2.42 | clouden, hasteka, HenX, hoolig4n, IZR         |
|           15 |     2789 | 2025-09-08 | Legion            | L   | 0.639      | -            | -                | -                | -         |   -13.28 | clouden, hasteka, HenX, hoolig4n, IZR         |
|           14 |     2860 | 2025-09-05 | The Huns          | L   | 0.623      | -            | -                | -                | -         |    -2.91 | clouden, hasteka, HenX, hoolig4n, IZR         |
|           13 |     2872 | 2025-09-05 | IHC               | W   | 0.619      | 0.333        | 0.001 (0.000)    | 0.061 (0.013)    | 1 (0.619) |     5.77 | clouden, hasteka, HenX, hoolig4n, IZR         |
|           12 |     2881 | 2025-09-04 | Chinggis Warriors | L   | 0.616      | -            | -                | -                | -         |    -5.08 | clouden, hasteka, HenX, hoolig4n, IZR         |
|           11 |     3029 | 2025-08-28 | Rare Atom         | L   | 0.566      | -            | -                | -                | -         |    -2.35 | clouden, hasteka, HenX, hoolig4n, IZR         |
|           10 |     3086 | 2025-08-26 | The Huns          | W   | 0.553      | 0.333        | 0.033 (0.006)    | 0.455 (0.084)    | 0 (0.000) |    15.02 | clouden, hasteka, HenX, hoolig4n, IZR         |
|            9 |     3350 | 2025-08-15 | Last Bullet       | W   | 0.479      | 0.333        | 0.004 (0.001)    | 0.236 (0.038)    | 0 (0.000) |     8.44 | clouden, hasteka, HenX, hoolig4n, IZR         |
|            8 |     3391 | 2025-08-14 | Kaleido           | W   | 0.473      | 0.333        | 0.014 (0.002)    | 0.423 (0.067)    | 0 (0.000) |    12.60 | clouden, hasteka, HenX, hoolig4n, IZR         |
|            7 |     3446 | 2025-08-13 | BORING PLAYERS    | W   | 0.466      | 0.333        | 0.002 (0.000)    | 0.191 (0.030)    | 0 (0.000) |     8.90 | clouden, hasteka, HenX, hoolig4n, IZR         |
|            6 |     3498 | 2025-08-12 | Lynn Vision       | L   | 0.459      | -            | -                | -                | -         |    -0.48 | clouden, hasteka, HenX, hoolig4n, IZR         |
|            5 |     3548 | 2025-08-11 | FengDa            | W   | 0.453      | 0.333        | 0.024 (0.004)    | 0.421 (0.063)    | 0 (0.000) |    10.45 | clouden, hasteka, HenX, hoolig4n, IZR         |
|            4 |     4091 | 2025-07-13 | IHC               | L   | 0.258      | -            | -                | -                | -         |    -5.94 | clouden, HenX, hoolig4n, Paranormal, Randyyyy |
|            3 |     4109 | 2025-07-12 | Chinggis Warriors | L   | 0.252      | -            | -                | -                | -         |    -5.85 | clouden, HenX, hoolig4n, Paranormal, Randyyyy |
|            2 |     4114 | 2025-07-12 | ex-TALON          | W   | 0.251      | 0.624        | -                | 0.045 (0.007)    | 0 (0.000) |     1.86 | clouden, HenX, hoolig4n, Paranormal, Randyyyy |
|            1 |     4145 | 2025-07-11 | Kaleido           | W   | 0.246      | 0.624        | 0.014 (0.002)    | 0.423 (0.065)    | -         |     6.70 | clouden, HenX, hoolig4n, Paranormal, Randyyyy |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,837.90)
- Divide that value by the 5th highest value among all rosters ($574,782.45)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-10-02 |      0.799 | $1,500.00      | $1,198.73       |
| 2025-09-06 |      0.624 | $1,250.00      | $780.45         |
| 2025-08-29 |      0.572 | $1,500.00      | $858.72         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
