### Roster Details<br />
Team Name: Mousquetaires<br />
Roster: devoduvek, drac, JACKZ, SIXER, Tarkky<br />
Global Rank: [177](../../standings_global_2026_03_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_02.md)<br />
Regional Rank: [122]( ../../standings_europe_2026_03_02.md)<br />
<br />
Final Rank Value:  753.4<br />
<br />
Final Rank Value (753.4) = Starting Rank Value (776.3) + Head To Head Adjustments (-22.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.370[<sup>1</sup>](#table2)
- Bounty Collected: 0.305[<sup>2</sup>](#table1)
- Opponent Network: 0.032[<sup>2</sup>](#table1)
- LAN Wins: 0.088[<sup>2</sup>](#table1)

The average of these factors is 0.199<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 776.3
- 400 + ( ( 0.199 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 776.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           28 |      450 | 2026-02-19 | Oxuji            | L   | 1.000      | -            | -                | -                | -         |    -6.83 | AsI0K, devoduvek, SIXER, SLIE9000, Tarkky |
|           27 |     1895 | 2025-12-21 | Sangal           | L   | 0.724      | -            | -                | -                | -         |    -3.72 | devoduvek, drac, JACKZ, SIXER, Tarkky     |
|           26 |     2010 | 2025-12-13 | eLITenergy       | L   | 0.673      | -            | -                | -                | -         |   -12.47 | devoduvek, drac, JACKZ, SIXER, Tarkky     |
|           25 |     2230 | 2025-12-01 | BASEMENT BOYS    | L   | 0.594      | -            | -                | -                | -         |   -11.77 | devoduvek, drac, JACKZ, SIXER, Tarkky     |
|           24 |     2291 | 2025-11-29 | HAVU             | W   | 0.580      | 0.384        | 0.012 (0.003)    | 0.531 (0.118)    | 0 (0.000) |    13.90 | devoduvek, drac, JACKZ, SIXER, Tarkky     |
|           23 |     2345 | 2025-11-28 | Betclic          | W   | 0.571      | 0.384        | 0.001 (0.000)    | 0.033 (0.007)    | 0 (0.000) |     6.13 | devoduvek, drac, JACKZ, SIXER, Tarkky     |
|           22 |     2477 | 2025-11-22 | Fire Flux        | L   | 0.532      | -            | -                | -                | -         |    -7.01 | devoduvek, drac, JACKZ, SIXER, Tarkky     |
|           21 |     2526 | 2025-11-21 | The Glecs        | W   | 0.525      | 0.344        | 0.000 (0.000)    | 0.035 (0.006)    | 0 (0.000) |     3.11 | devoduvek, drac, JACKZ, SIXER, Tarkky     |
|           20 |     2570 | 2025-11-20 | Leo              | L   | 0.518      | -            | -                | -                | -         |    -5.76 | devoduvek, drac, JACKZ, SIXER, Tarkky     |
|           19 |     2819 | 2025-11-09 | BIG              | L   | 0.446      | -            | -                | -                | -         |    -0.56 | devoduvek, drac, JACKZ, SIXER, Tarkky     |
|           18 |     2877 | 2025-11-08 | Wicked           | W   | 0.438      | 0.433        | 0.001 (0.000)    | -                | 1 (0.438) |     2.44 | devoduvek, drac, JACKZ, SIXER, Tarkky     |
|           17 |     2986 | 2025-11-07 | Deep Cross       | W   | 0.431      | 0.433        | 0.005 (0.001)    | 0.033 (0.006)    | 1 (0.431) |     4.80 | devoduvek, drac, JACKZ, SIXER, Tarkky     |
|           16 |     3197 | 2025-10-30 | home             | L   | 0.378      | -            | -                | -                | -         |    -6.95 | devoduvek, drac, JACKZ, SIXER, Tarkky     |
|           15 |     3215 | 2025-10-29 | Fire Flux        | L   | 0.372      | -            | -                | -                | -         |    -5.72 | devoduvek, drac, JACKZ, SIXER, Tarkky     |
|           14 |     3243 | 2025-10-28 | home             | W   | 0.366      | 0.344        | 0.001 (0.000)    | 0.171 (0.022)    | 0 (0.000) |     4.53 | devoduvek, drac, JACKZ, SIXER, Tarkky     |
|           13 |     3385 | 2025-10-25 | FORZE Reload     | L   | 0.347      | -            | -                | -                | -         |    -4.42 | devoduvek, drac, JACKZ, SIXER, Tarkky     |
|           12 |     3459 | 2025-10-24 | AMKAL            | L   | 0.339      | -            | -                | -                | -         |    -6.27 | devoduvek, drac, JACKZ, SIXER, Tarkky     |
|           11 |     3495 | 2025-10-23 | BIG              | L   | 0.333      | -            | -                | -                | -         |    -0.45 | devoduvek, drac, JACKZ, SIXER, Tarkky     |
|           10 |     3529 | 2025-10-22 | MOLO             | W   | 0.326      | 0.383        | 0.000 (0.000)    | 0.024 (0.003)    | 0 (0.000) |     1.69 | devoduvek, drac, JACKZ, SIXER, Tarkky     |
|            9 |     3542 | 2025-10-21 | FUT              | W   | 0.319      | 0.383        | 0.369 (0.045)    | 0.578 (0.071)    | 0 (0.000) |     9.91 | devoduvek, drac, JACKZ, SIXER, Tarkky     |
|            8 |     3547 | 2025-10-21 | GenOne           | W   | 0.318      | 0.383        | 0.030 (0.004)    | 0.692 (0.084)    | 0 (0.000) |     7.84 | devoduvek, drac, JACKZ, SIXER, Tarkky     |
|            7 |     4035 | 2025-10-06 | Tricked          | L   | 0.219      | -            | -                | -                | -         |    -0.90 | devoduvek, drac, JACKZ, SIXER, Tarkky     |
|            6 |     4123 | 2025-10-04 | ex-Zero Tenacity | L   | 0.207      | -            | -                | -                | -         |    -3.48 | devoduvek, drac, JACKZ, SIXER, Tarkky     |
|            5 |     4221 | 2025-10-02 | SENZA            | W   | 0.192      | 0.435        | 0.000 (0.000)    | 0.005 (0.000)    | 0 (0.000) |     0.98 | devoduvek, drac, JACKZ, SIXER, Tarkky     |
|            4 |     4706 | 2025-09-18 | KHAN             | L   | 0.099      | -            | -                | -                | -         |    -2.44 | devoduvek, drac, JACKZ, SIXER, Tarkky     |
|            3 |     4821 | 2025-09-14 | Square Sausages  | W   | 0.073      | -            | -                | -                | -         |     0.25 | devoduvek, drac, JACKZ, SIXER, Tarkky     |
|            2 |     4893 | 2025-09-13 | ALGO             | W   | 0.066      | 0.384        | -                | 0.037 (0.001)    | -         |     0.36 | devoduvek, drac, JACKZ, SIXER, Tarkky     |
|            1 |     5226 | 2025-09-04 | AaB              | L   | 0.007      | -            | -                | -                | -         |    -0.13 | devoduvek, drac, JACKZ, SIXER, Tarkky     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,684.37)
- Divide that value by the 5th highest value among all rosters ($334,320.24)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-11-09 |      0.446 | $15,000.00     | $6,684.37       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
