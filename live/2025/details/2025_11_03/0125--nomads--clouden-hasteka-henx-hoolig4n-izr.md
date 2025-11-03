### Roster Details<br />
Team Name: NomadS<br />
Roster: clouden, hasteka, HenX, hoolig4n, IZR<br />
Global Rank: [125](../../standings_global_2025_11_03.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_11_03.md)<br />
Regional Rank: [12]( ../../standings_asia_2025_11_03.md)<br />
<br />
Final Rank Value:  759.5<br />
<br />
Final Rank Value (759.5) = Starting Rank Value (741.5) + Head To Head Adjustments (18.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.314[<sup>1</sup>](#table2)
- Bounty Collected: 0.273[<sup>2</sup>](#table1)
- Opponent Network: 0.060[<sup>2</sup>](#table1)
- LAN Wins: 0.082[<sup>2</sup>](#table1)

The average of these factors is 0.182<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 741.5
- 400 + ( ( 0.182 - 0.000 ) / ( 0.853 - 0.000 ) ) * 1600 = 741.5


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
|           25 |      607 | 2025-10-07 | Last Bullet       | L   | 1.000      | -            | -                | -                | -         |   -17.72 | clouden, hasteka, HenX, hoolig4n, shigeru     |
|           24 |      668 | 2025-10-06 | Kaleido           | L   | 1.000      | -            | -                | -                | -         |    -8.65 | clouden, hasteka, HenX, hoolig4n, shigeru     |
|           23 |      728 | 2025-10-05 | ScarX             | W   | 1.000      | 0.333        | 0.004 (0.001)    | 0.095 (0.032)    | 0 (0.000) |    10.25 | clouden, hasteka, HenX, hoolig4n, shigeru     |
|           22 |      858 | 2025-10-02 | Chinggis Warriors | L   | 0.985      | -            | -                | -                | -         |    -7.83 | clouden, hasteka, HenX, hoolig4n, me1o        |
|           21 |      865 | 2025-10-02 | The Huns          | L   | 0.984      | -            | -                | -                | -         |    -3.83 | clouden, hasteka, HenX, hoolig4n, IZR         |
|           20 |     1535 | 2025-09-13 | Chinggis Warriors | L   | 0.858      | -            | -                | -                | -         |    -5.86 | clouden, hasteka, HenX, hoolig4n, IZR         |
|           19 |     1621 | 2025-09-11 | The Huns          | L   | 0.846      | -            | -                | -                | -         |    -3.51 | clouden, hasteka, HenX, hoolig4n, IZR         |
|           18 |     1671 | 2025-09-10 | Just Swing        | W   | 0.839      | 0.333        | 0.004 (0.001)    | 0.214 (0.060)    | 0 (0.000) |    10.30 | clouden, hasteka, HenX, hoolig4n, IZR         |
|           17 |     1729 | 2025-09-09 | True Thunder      | W   | 0.832      | 0.333        | 0.000 (0.000)    | -                | 0 (0.000) |     2.68 | clouden, hasteka, HenX, hoolig4n, IZR         |
|           16 |     1768 | 2025-09-08 | Legion            | L   | 0.826      | -            | -                | -                | -         |   -18.21 | clouden, hasteka, HenX, hoolig4n, IZR         |
|           15 |     1839 | 2025-09-05 | The Huns          | L   | 0.810      | -            | -                | -                | -         |    -3.35 | clouden, hasteka, HenX, hoolig4n, IZR         |
|           14 |     1851 | 2025-09-05 | IHC               | W   | 0.805      | 0.333        | 0.001 (0.000)    | 0.202 (0.054)    | 1 (0.805) |     9.96 | clouden, hasteka, HenX, hoolig4n, IZR         |
|           13 |     1860 | 2025-09-04 | Chinggis Warriors | L   | 0.803      | -            | -                | -                | -         |    -6.34 | clouden, hasteka, HenX, hoolig4n, IZR         |
|           12 |     2008 | 2025-08-28 | Rare Atom         | L   | 0.753      | -            | -                | -                | -         |    -5.02 | clouden, hasteka, HenX, hoolig4n, IZR         |
|           11 |     2065 | 2025-08-26 | The Huns          | W   | 0.739      | 0.333        | 0.039 (0.010)    | 0.502 (0.124)    | 0 (0.000) |    20.53 | clouden, hasteka, HenX, hoolig4n, IZR         |
|           10 |     2329 | 2025-08-15 | Last Bullet       | W   | 0.666      | 0.333        | 0.002 (0.000)    | 0.217 (0.048)    | 0 (0.000) |     8.41 | clouden, hasteka, HenX, hoolig4n, IZR         |
|            9 |     2370 | 2025-08-14 | Kaleido           | W   | 0.659      | 0.333        | 0.008 (0.002)    | 0.354 (0.078)    | 0 (0.000) |    16.14 | clouden, hasteka, HenX, hoolig4n, IZR         |
|            8 |     2425 | 2025-08-13 | BORING PLAYERS    | W   | 0.653      | 0.333        | 0.000 (0.000)    | 0.060 (0.013)    | 0 (0.000) |     5.27 | clouden, hasteka, HenX, hoolig4n, IZR         |
|            7 |     2477 | 2025-08-12 | Lynn Vision       | L   | 0.646      | -            | -                | -                | -         |    -1.37 | clouden, hasteka, HenX, hoolig4n, IZR         |
|            6 |     2527 | 2025-08-11 | FengDa            | W   | 0.639      | 0.333        | 0.025 (0.005)    | 0.340 (0.072)    | 0 (0.000) |    13.12 | clouden, hasteka, HenX, hoolig4n, IZR         |
|            5 |     3070 | 2025-07-13 | IHC               | L   | 0.445      | -            | -                | -                | -         |    -8.30 | clouden, HenX, hoolig4n, Paranormal, Randyyyy |
|            4 |     3088 | 2025-07-12 | Chinggis Warriors | L   | 0.439      | -            | -                | -                | -         |    -2.41 | clouden, HenX, hoolig4n, Paranormal, Randyyyy |
|            3 |     3093 | 2025-07-12 | ex-TALON          | W   | 0.438      | 0.624        | -                | 0.070 (0.019)    | 0 (0.000) |     2.93 | clouden, HenX, hoolig4n, Paranormal, Randyyyy |
|            2 |     3124 | 2025-07-11 | Kaleido           | W   | 0.433      | 0.624        | 0.008 (0.002)    | 0.354 (0.096)    | -         |    10.89 | clouden, HenX, hoolig4n, Paranormal, Randyyyy |
|            1 |     4122 | 2025-05-09 | Rare Atom         | L   | 0.012      | -            | -                | -                | -         |    -0.06 | clouden, HenX, hoolig4n, Paranormal, Randyyyy |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,046.03)
- Divide that value by the 5th highest value among all rosters ($619,318.60)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-10-02 |      0.986 | $1,500.00      | $1,478.70       |
| 2025-09-06 |      0.811 | $1,250.00      | $1,013.76       |
| 2025-08-29 |      0.759 | $1,500.00      | $1,138.69       |
| 2025-05-16 |      0.059 | $7,000.00      | $414.88         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
