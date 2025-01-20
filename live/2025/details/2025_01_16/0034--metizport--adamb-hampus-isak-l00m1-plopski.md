### Roster Details<br />
Team Name: Metizport<br />
Roster: adamb, hampus, isak, L00m1, Plopski<br />
Global Rank: [34](../../standings_global_2025_01_16.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_16.md)<br />
Regional Rank: [25]( ../../standings_europe_2025_01_16.md)<br />
<br />
Final Rank Value:  1179.6<br />
<br />
Final Rank Value (1179.6) = Starting Rank Value (1368.9) + Head To Head Adjustments (-189.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.574[<sup>1</sup>](#table2)
- Bounty Collected: 0.400[<sup>2</sup>](#table1)
- Opponent Network: 0.239[<sup>2</sup>](#table1)
- LAN Wins: 0.742[<sup>2</sup>](#table1)

The average of these factors is 0.489<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1368.9
- 400 + ( ( 0.489 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 1368.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           49 |       16 | 2025-01-15 | Vitality          | L   | 1.000      | -            | -                | -                | -         |    -0.88 | adamb, hampus, isak, L00m1, Plopski |
|           48 |      115 | 2024-12-22 | PORTUGAL          | L   | 1.000      | -            | -                | -                | -         |   -27.74 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           47 |      119 | 2024-12-22 | Zero Tenacity     | W   | 1.000      | 0.387        | 0.084 (0.032)    | 0.572 (0.222)    | 0 (0.000) |     8.96 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           46 |      232 | 2024-12-14 | 9INE              | L   | 0.978      | -            | -                | -                | -         |   -24.09 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           45 |      259 | 2024-12-13 | Monte             | W   | 0.971      | 0.435        | 0.078 (0.033)    | 0.583 (0.246)    | 0 (0.000) |    10.46 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           44 |      288 | 2024-12-11 | Insilio           | W   | 0.957      | 0.435        | -                | 0.531 (0.221)    | -         |     2.31 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           43 |      301 | 2024-12-10 | Aurora Young Blud | L   | 0.950      | -            | -                | -                | -         |   -23.89 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           42 |      330 | 2024-12-08 | FLuffy Gangsters  | W   | 0.936      | 0.435        | -                | 0.587 (0.239)    | -         |     2.21 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           41 |      404 | 2024-12-05 | Fire Flux         | W   | 0.917      | 0.435        | -                | 0.643 (0.256)    | -         |     3.58 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           40 |      458 | 2024-12-03 | Into the Breach   | L   | 0.903      | -            | -                | -                | -         |   -23.60 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           39 |      759 | 2024-11-17 | Partizan          | L   | 0.798      | -            | -                | -                | -         |   -14.83 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           38 |      764 | 2024-11-17 | Nexus             | L   | 0.797      | -            | -                | -                | -         |   -11.73 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           37 |      790 | 2024-11-16 | The Huns          | W   | 0.791      | 0.617        | 0.056 (0.027)    | 0.353 (0.172)    | 1 (0.791) |     4.09 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           36 |      819 | 2024-11-15 | Canada            | W   | 0.784      | -            | -                | -                | 1 (0.784) |     0.62 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           35 |      825 | 2024-11-15 | Norway            | W   | 0.783      | -            | -                | -                | 1 (0.783) |     0.86 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           34 |      837 | 2024-11-14 | los kogutos       | W   | 0.779      | 0.617        | 0.072 (0.035)    | 0.843 (0.406)    | 1 (0.779) |     4.59 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           33 |      883 | 2024-11-13 | Turkey            | L   | 0.771      | -            | -                | -                | -         |   -23.52 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           32 |      890 | 2024-11-13 | Mindfreak         | W   | 0.771      | -            | -                | -                | 1 (0.771) |     0.96 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           31 |      986 | 2024-11-09 | Ninjas in Pyjamas | W   | 0.745      | 0.432        | 0.079 (0.026)    | -                | 1 (0.745) |     5.49 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           30 |     1005 | 2024-11-08 | Johnny Speeds     | W   | 0.740      | 0.432        | 0.109 (0.035)    | 0.772 (0.247)    | 1 (0.740) |     5.33 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           29 |     1021 | 2024-11-07 | Kappa Bar         | W   | 0.734      | -            | -                | -                | 1 (0.734) |     1.41 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           28 |     1163 | 2024-10-31 | Johnny Speeds     | L   | 0.685      | -            | -                | -                | -         |   -16.93 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           27 |     1182 | 2024-10-30 | ECSTATIC          | W   | 0.679      | 0.333        | 0.079 (0.018)    | 1.000 (0.226)    | -         |     3.37 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           26 |     1187 | 2024-10-30 | KOI               | W   | 0.678      | -            | -                | -                | -         |     2.33 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           25 |     1534 | 2024-10-12 | Aurora            | L   | 0.557      | -            | -                | -                | -         |   -15.13 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           24 |     1558 | 2024-10-10 | fnatic            | W   | 0.544      | 0.435        | 0.183 (0.043)    | -                | -         |     4.81 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           23 |     1635 | 2024-10-08 | ALTERNATE aTTaX   | W   | 0.530      | 0.435        | -                | 0.684 (0.157)    | -         |     2.88 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           22 |     1661 | 2024-10-07 | Monte             | L   | 0.524      | -            | -                | -                | -         |   -13.17 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           21 |     1742 | 2024-10-04 | CYBERSHOKE        | W   | 0.505      | -            | -                | -                | -         |     1.17 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           20 |     1787 | 2024-10-03 | Zero Tenacity     | L   | 0.497      | -            | -                | -                | -         |   -12.36 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           19 |     1864 | 2024-10-01 | G2 Ares           | W   | 0.486      | -            | -                | -                | -         |     0.27 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           18 |     2201 | 2024-09-23 | Into the Breach   | L   | 0.429      | -            | -                | -                | -         |   -12.31 | adamb, L00m1, nilo, Plopski, Sapec  |
|           17 |     2389 | 2024-09-16 | 9INE              | W   | 0.384      | 0.384        | 0.125 (0.018)    | -                | -         |     1.54 | adamb, L00m1, nilo, Plopski, Sapec  |
|           16 |     2545 | 2024-09-11 | Zero Tenacity     | L   | 0.351      | -            | -                | -                | -         |    -9.11 | adamb, L00m1, nilo, Plopski, Sapec  |
|           15 |     2599 | 2024-09-09 | Zero Tenacity     | L   | 0.337      | -            | -                | -                | -         |    -8.90 | adamb, L00m1, nilo, Plopski, Sapec  |
|           14 |     2745 | 2024-09-04 | Sampi             | W   | 0.305      | -            | -                | -                | -         |     1.12 | adamb, L00m1, nilo, Plopski, Sapec  |
|           13 |     2807 | 2024-09-02 | FAVBET            | W   | 0.291      | -            | -                | -                | -         |     0.76 | adamb, L00m1, nilo, Plopski, Sapec  |
|           12 |     2959 | 2024-08-28 | Nemiga            | W   | 0.257      | 0.384        | 0.508 (0.050)    | -                | -         |     3.17 | adamb, L00m1, nilo, Plopski, Sapec  |
|           11 |     3024 | 2024-08-27 | ex-Enterprise     | W   | 0.250      | -            | -                | -                | -         |     0.51 | adamb, L00m1, nilo, Plopski, Sapec  |
|           10 |     3204 | 2024-08-22 | Complexity        | L   | 0.218      | -            | -                | -                | -         |    -3.56 | adamb, L00m1, nilo, Plopski, Sapec  |
|            9 |     3275 | 2024-08-21 | 9INE              | L   | 0.210      | -            | -                | -                | -         |    -5.85 | adamb, L00m1, nilo, Plopski, Sapec  |
|            8 |     3324 | 2024-08-20 | TSM               | L   | 0.203      | -            | -                | -                | -         |    -5.97 | adamb, L00m1, nilo, Plopski, Sapec  |
|            7 |     3341 | 2024-08-19 | Sashi             | L   | 0.198      | -            | -                | -                | -         |    -5.47 | adamb, L00m1, nilo, Plopski, Sapec  |
|            6 |     3457 | 2024-08-15 | PARIVISION        | L   | 0.170      | -            | -                | -                | -         |    -5.03 | adamb, L00m1, nilo, Plopski, Sapec  |
|            5 |     3558 | 2024-08-12 | Sampi             | W   | 0.151      | -            | -                | -                | -         |     0.51 | adamb, L00m1, nilo, Plopski, Sapec  |
|            4 |     3659 | 2024-08-08 | Into the Breach   | W   | 0.124      | -            | -                | -                | -         |     0.24 | adamb, L00m1, nilo, Plopski, Sapec  |
|            3 |     3688 | 2024-08-07 | Johnny Speeds     | W   | 0.119      | -            | -                | -                | -         |     0.61 | adamb, L00m1, nilo, Plopski, Sapec  |
|            2 |     3697 | 2024-08-07 | TSM               | W   | 0.118      | -            | -                | -                | -         |     0.22 | adamb, L00m1, nilo, Plopski, Sapec  |
|            1 |     3909 | 2024-08-01 | ALTERNATE aTTaX   | W   | 0.078      | -            | -                | -                | -         |     0.50 | adamb, L00m1, nilo, Plopski, Sapec  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($41,313.31)
- Divide that value by the 5th highest value among all rosters ($227,813.60)
- The final value (0.18) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-22 |      1.000 | $6,557.00      | $6,557.00       |
| 2024-12-15 |      0.985 | $2,000.00      | $1,970.27       |
| 2024-11-17 |      0.799 | $15,000.00     | $11,978.92      |
| 2024-11-09 |      0.745 | $24,239.00     | $18,068.79      |
| 2024-10-13 |      0.566 | $2,000.00      | $1,131.21       |
| 2024-09-26 |      0.452 | $500.00        | $225.89         |
| 2024-09-14 |      0.372 | $500.00        | $186.07         |
| 2024-08-25 |      0.239 | $5,000.00      | $1,195.17       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
