### Roster Details<br />
Team Name: Ninjas in Pyjamas<br />
Roster: isak, jocab, MisteM, r1nkle, REZ<br />
Global Rank: [62](../../standings_global_2025_03_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_03.md)<br />
Regional Rank: [44]( ../../standings_europe_2025_03_03.md)<br />
<br />
Final Rank Value:  876.3<br />
<br />
Final Rank Value (876.3) = Starting Rank Value (854.0) + Head To Head Adjustments (22.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.383[<sup>1</sup>](#table2)
- Bounty Collected: 0.282[<sup>2</sup>](#table1)
- Opponent Network: 0.040[<sup>2</sup>](#table1)
- LAN Wins: 0.237[<sup>2</sup>](#table1)

The average of these factors is 0.236<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 854.0
- 400 + ( ( 0.236 - 0.000 ) / ( 0.830 - 0.000 ) ) * 1600 = 854.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           19 |     1306 | 2024-11-24 | Spirit        | L   | 0.539      | -            | -                | -                | -         |    -0.04 | isak, jocab, MisteM, r1nkle, REZ |
|           18 |     1313 | 2024-11-23 | 9 Pandas      | W   | 0.537      | 0.143        | 0.084 (0.006)    | 0.602 (0.046)    | 1 (0.537) |    11.98 | isak, jocab, MisteM, r1nkle, REZ |
|           17 |     1341 | 2024-11-23 | TSM           | W   | 0.531      | 0.143        | 0.009 (0.001)    | 0.159 (0.012)    | 1 (0.531) |     5.30 | isak, jocab, MisteM, r1nkle, REZ |
|           16 |     1373 | 2024-11-21 | Falcons       | L   | 0.523      | -            | -                | -                | -         |    -0.06 | isak, jocab, MisteM, r1nkle, REZ |
|           15 |     1389 | 2024-11-21 | PARIVISION    | W   | 0.518      | 0.143        | 0.006 (0.000)    | 0.072 (0.005)    | 1 (0.518) |     5.31 | isak, jocab, MisteM, r1nkle, REZ |
|           14 |     1401 | 2024-11-20 | G2            | L   | 0.517      | -            | -                | -                | -         |    -0.08 | isak, jocab, MisteM, r1nkle, REZ |
|           13 |     1603 | 2024-11-12 | BetBoom       | L   | 0.459      | -            | -                | -                | -         |    -5.01 | isak, jocab, MisteM, r1nkle, REZ |
|           12 |     1635 | 2024-11-11 | Zero Tenacity | W   | 0.454      | 0.384        | 0.026 (0.004)    | 0.603 (0.105)    | 0 (0.000) |     7.34 | isak, jocab, MisteM, r1nkle, REZ |
|           11 |     1676 | 2024-11-09 | Metizport     | L   | 0.441      | -            | -                | -                | -         |    -3.50 | isak, jocab, MisteM, r1nkle, REZ |
|           10 |     1698 | 2024-11-08 | Alliance      | W   | 0.434      | 0.432        | 0.015 (0.003)    | 0.615 (0.115)    | 1 (0.434) |     7.29 | isak, jocab, MisteM, r1nkle, REZ |
|            9 |     1983 | 2024-10-25 | Imperial      | L   | 0.340      | -            | -                | -                | -         |    -3.74 | isak, jocab, MisteM, r1nkle, REZ |
|            8 |     2011 | 2024-10-23 | Falcons       | L   | 0.328      | -            | -                | -                | -         |    -0.03 | isak, jocab, MisteM, r1nkle, REZ |
|            7 |     2013 | 2024-10-23 | Imperial      | W   | 0.326      | 0.477        | 0.084 (0.013)    | 0.774 (0.120)    | 0 (0.000) |     6.77 | isak, jocab, MisteM, r1nkle, REZ |
|            6 |     2158 | 2024-10-16 | JANO          | L   | 0.281      | -            | -                | -                | -         |    -4.38 | isak, jocab, MisteM, r1nkle, REZ |
|            5 |     2171 | 2024-10-16 | B8            | L   | 0.279      | -            | -                | -                | -         |    -1.73 | isak, jocab, MisteM, r1nkle, REZ |
|            4 |     2473 | 2024-10-04 | ECSTATIC      | L   | 0.198      | -            | -                | -                | -         |    -3.06 | isak, jocab, MisteM, r1nkle, REZ |
|            3 |     3390 | 2024-09-07 | Falcons       | L   | 0.020      | -            | -                | -                | -         |    -0.00 | alex, isak, maxster, r1nkle, REZ |
|            2 |     3441 | 2024-09-05 | FaZe          | L   | 0.008      | -            | -                | -                | -         |    -0.00 | alex, isak, maxster, r1nkle, REZ |
|            1 |     3491 | 2024-09-04 | Natus Vincere | L   | 0.000      | -            | -                | -                | -         |     0.00 | alex, isak, maxster, r1nkle, REZ |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($8,198.38)
- Divide that value by the 5th highest value among all rosters ($333,212.68)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-12 |      0.460 | $1,500.00      | $689.94         |
| 2024-11-09 |      0.441 | $11,635.00     | $5,125.65       |
| 2024-10-20 |      0.307 | $5,000.00      | $1,536.27       |
| 2024-09-22 |      0.121 | $7,000.00      | $846.52         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
