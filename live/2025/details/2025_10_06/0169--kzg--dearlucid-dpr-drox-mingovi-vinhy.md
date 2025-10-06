### Roster Details<br />
Team Name: KZG<br />
Roster: dearlucid, dpr, Drox, Mingovi, vinhy<br />
Global Rank: [169](../../standings_global_2025_10_06.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_10_06.md)<br />
Regional Rank: [23]( ../../standings_asia_2025_10_06.md)<br />
<br />
Final Rank Value:  648.1<br />
<br />
Final Rank Value (648.1) = Starting Rank Value (665.6) + Head To Head Adjustments (-17.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.266[<sup>1</sup>](#table2)
- Bounty Collected: 0.244[<sup>2</sup>](#table1)
- Opponent Network: 0.033[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.136<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 665.6
- 400 + ( ( 0.136 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 665.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           17 |      476 | 2025-09-18 | Ground Zero     | L   | 1.000      | -            | -                | -                | -         |   -14.43 | dearlucid, dpr, Drox, Mingovi, vinhy  |
|           16 |      784 | 2025-09-10 | FURY            | W   | 1.000      | 0.278        | 0.000 (0.000)    | 0.106 (0.029)    | 0 (0.000) |    14.29 | dearlucid, dpr, Drox, Mingovi, vinhy  |
|           15 |      787 | 2025-09-10 | Rooster         | L   | 1.000      | -            | -                | -                | -         |   -10.86 | dearlucid, dpr, Drox, Mingovi, vinhy  |
|           14 |      837 | 2025-09-09 | DanCompany      | W   | 1.000      | 0.278        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     5.38 | dearlucid, dpr, Drox, Mingovi, vinhy  |
|           13 |      879 | 2025-09-08 | Ground Zero     | L   | 1.000      | -            | -                | -                | -         |   -15.10 | dearlucid, dpr, Drox, Mingovi, vinhy  |
|           12 |      883 | 2025-09-08 | Animus Victoria | W   | 1.000      | 0.314        | 0.000 (0.000)    | 0.105 (0.033)    | 0 (0.000) |    11.39 | dearlucid, dpr, Drox, Mingovi, vinhy  |
|           11 |      933 | 2025-09-06 | Ground Zero     | L   | 0.999      | -            | -                | -                | -         |   -15.96 | dearlucid, dpr, Drox, Mingovi, vinhy  |
|           10 |      958 | 2025-09-05 | Mindfreak       | W   | 0.992      | 0.314        | 0.002 (0.001)    | 0.260 (0.081)    | 0 (0.000) |    12.21 | dearlucid, dpr, Drox, Mingovi, vinhy  |
|            9 |      982 | 2025-09-03 | Animus Victoria | L   | 0.979      | -            | -                | -                | -         |   -19.96 | dearlucid, dpr, Drox, Mingovi, vinhy  |
|            8 |      998 | 2025-09-01 | Exsto           | W   | 0.966      | 0.314        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     5.22 | dearlucid, dpr, Drox, Mingovi, vinhy  |
|            7 |     2078 | 2025-07-17 | SemperFi        | L   | 0.659      | -            | -                | -                | -         |    -7.19 | alecc, dearlucid, dpr, Mingovi, vinhy |
|            6 |     2081 | 2025-07-16 | Rooster         | L   | 0.657      | -            | -                | -                | -         |    -8.29 | alecc, dearlucid, dpr, Mingovi, vinhy |
|            5 |     2129 | 2025-07-15 | Ground Zero     | W   | 0.645      | 0.314        | 0.006 (0.001)    | 0.240 (0.049)    | 0 (0.000) |    10.26 | alecc, dearlucid, dpr, Mingovi, vinhy |
|            4 |     2171 | 2025-07-12 | SemperFi        | W   | 0.631      | 0.314        | 0.029 (0.006)    | 0.501 (0.099)    | 0 (0.000) |    13.01 | alecc, Brh2203, dpr, Mingovi, vinhy   |
|            3 |     2229 | 2025-07-11 | Underground     | W   | 0.619      | 0.314        | 0.003 (0.001)    | 0.148 (0.029)    | 0 (0.000) |     9.48 | alecc, Brh2203, dpr, Mingovi, vinhy   |
|            2 |     2248 | 2025-07-10 | DOG             | W   | 0.613      | 0.314        | 0.000 (0.000)    | 0.034 (0.007)    | 0 (0.000) |     3.64 | alecc, dearlucid, dpr, Mingovi, vinhy |
|            1 |     2298 | 2025-07-08 | FURY            | L   | 0.598      | -            | -                | -                | -         |   -10.58 | alecc, dearlucid, dpr, Mingovi, vinhy |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($653.48)
- Divide that value by the 5th highest value among all rosters ($380,085.28)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-07-18 |      0.665 | $983.00        | $653.48         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
