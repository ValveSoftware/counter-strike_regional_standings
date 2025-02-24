### Roster Details<br />
Team Name: TSM<br />
Roster: acoR, niko, sirah, valde, Zyphon<br />
Global Rank: [123](../../standings_global_2025_02_24.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_24.md)<br />
Regional Rank: [86]( ../../standings_europe_2025_02_24.md)<br />
<br />
Final Rank Value:  730.7<br />
<br />
Final Rank Value (730.7) = Starting Rank Value (729.7) + Head To Head Adjustments (0.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.330[<sup>1</sup>](#table2)
- Bounty Collected: 0.260[<sup>2</sup>](#table1)
- Opponent Network: 0.037[<sup>2</sup>](#table1)
- LAN Wins: 0.065[<sup>2</sup>](#table1)

The average of these factors is 0.173<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 729.7
- 400 + ( ( 0.173 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 729.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           34 |      868 | 2024-12-12 | 9INE              | L   | 0.704      | -            | -                | -                | -         |    -6.62 | acoR, niko, sirah, valde, Zyphon  |
|           33 |      894 | 2024-12-10 | Iberian Soul      | L   | 0.691      | -            | -                | -                | -         |    -7.88 | acoR, niko, sirah, valde, Zyphon  |
|           32 |      923 | 2024-12-08 | Illuminar         | W   | 0.677      | 0.371        | 0.007 (0.002)    | 0.350 (0.088)    | 0 (0.000) |    11.38 | acoR, niko, sirah, valde, Zyphon  |
|           31 |      977 | 2024-12-06 | NAVI Junior       | L   | 0.664      | -            | -                | -                | -         |    -4.50 | acoR, niko, sirah, valde, Zyphon  |
|           30 |     1072 | 2024-12-02 | Endpoint          | W   | 0.638      | 0.371        | 0.008 (0.002)    | 0.296 (0.070)    | 0 (0.000) |    10.41 | acoR, niko, sirah, valde, Zyphon  |
|           29 |     1253 | 2024-11-23 | Ninjas in Pyjamas | L   | 0.576      | -            | -                | -                | -         |    -5.47 | acoR, niko, sirah, valde, Zyphon  |
|           28 |     1281 | 2024-11-22 | PARIVISION        | W   | 0.570      | 0.143        | 0.006 (0.001)    | -                | 1 (0.570) |     9.00 | acoR, niko, sirah, valde, Zyphon  |
|           27 |     1295 | 2024-11-21 | Virtus.pro        | L   | 0.564      | -            | -                | -                | -         |    -0.18 | acoR, niko, sirah, valde, Zyphon  |
|           26 |     1305 | 2024-11-21 | 3DMAX             | L   | 0.563      | -            | -                | -                | -         |    -0.24 | acoR, niko, sirah, valde, Zyphon  |
|           25 |     1882 | 2024-10-26 | Chimera           | L   | 0.391      | -            | -                | -                | -         |    -4.43 | acoR, niko, sirah, valde, Zyphon  |
|           24 |     2052 | 2024-10-17 | HOTU              | L   | 0.331      | -            | -                | -                | -         |    -6.24 | acoR, niko, sirah, valde, Zyphon  |
|           23 |     2071 | 2024-10-16 | 9 Pandas          | L   | 0.326      | -            | -                | -                | -         |    -2.26 | acoR, niko, sirah, valde, Zyphon  |
|           22 |     2099 | 2024-10-15 | 3DMAX             | L   | 0.320      | -            | -                | -                | -         |    -0.14 | acoR, niko, sirah, valde, Zyphon  |
|           21 |     2166 | 2024-10-10 | SovvyKiNG         | L   | 0.284      | -            | -                | -                | -         |    -7.01 | acoR, niko, sirah, valde, Zyphon  |
|           20 |     2250 | 2024-10-08 | FAVBET            | L   | 0.272      | -            | -                | -                | -         |    -3.82 | acoR, niko, sirah, valde, Zyphon  |
|           19 |     2300 | 2024-10-06 | G2 Ares           | W   | 0.259      | 0.435        | -                | 0.111 (0.013)    | 0 (0.000) |     1.99 | acoR, niko, sirah, valde, Zyphon  |
|           18 |     2350 | 2024-10-05 | Passion UA        | L   | 0.250      | -            | -                | -                | -         |    -1.60 | acoR, niko, sirah, valde, Zyphon  |
|           17 |     2376 | 2024-10-04 | ECSTATIC          | L   | 0.245      | -            | -                | -                | -         |    -2.59 | acoR, niko, sirah, valde, Zyphon  |
|           16 |     2388 | 2024-10-04 | Apogee            | W   | 0.243      | 0.371        | -                | 0.143 (0.013)    | 0 (0.000) |     3.40 | acoR, niko, sirah, valde, Zyphon  |
|           15 |     2411 | 2024-10-03 | ALTERNATE aTTaX   | L   | 0.239      | -            | -                | -                | -         |    -2.59 | acoR, niko, sirah, valde, Zyphon  |
|           14 |     2428 | 2024-10-03 | Illuminar         | W   | 0.237      | 0.371        | 0.007 (0.001)    | 0.350 (0.031)    | 0 (0.000) |     4.32 | acoR, niko, sirah, valde, Zyphon  |
|           13 |     2515 | 2024-10-01 | Gaimin Gladiators | W   | 0.224      | 0.371        | 0.032 (0.003)    | 0.605 (0.050)    | 0 (0.000) |     4.22 | acoR, niko, sirah, valde, Zyphon  |
|           12 |     2521 | 2024-10-01 | Apogee            | L   | 0.224      | -            | -                | -                | -         |    -3.97 | acoR, niko, sirah, valde, Zyphon  |
|           11 |     2542 | 2024-09-30 | Adventurers       | W   | 0.217      | -            | -                | -                | 0 (0.000) |     3.19 | acoR, niko, sirah, valde, Zyphon  |
|           10 |     2567 | 2024-09-29 | Illuminar         | W   | 0.211      | 0.371        | 0.007 (0.001)    | 0.350 (0.027)    | 0 (0.000) |     3.86 | acoR, niko, sirah, valde, Zyphon  |
|            9 |     2752 | 2024-09-25 | Gaimin Gladiators | W   | 0.184      | 0.371        | 0.032 (0.002)    | 0.605 (0.041)    | 0 (0.000) |     3.54 | acoR, niko, sirah, valde, Zyphon  |
|            8 |     2900 | 2024-09-21 | Permitta          | W   | 0.157      | 0.371        | 0.027 (0.002)    | 0.424 (0.025)    | -         |     3.75 | acoR, niko, sirah, valde, Zyphon  |
|            7 |     3171 | 2024-09-12 | Sashi             | L   | 0.098      | -            | -                | -                | -         |    -0.75 | acoR, Altekz, niko, sirah, Zyphon |
|            6 |     3234 | 2024-09-10 | ALTERNATE aTTaX   | W   | 0.085      | 0.384        | 0.020 (0.001)    | 0.416 (0.014)    | -         |     1.89 | acoR, Altekz, niko, valde, Zyphon |
|            5 |     3240 | 2024-09-10 | SAW               | L   | 0.084      | -            | -                | -                | -         |    -0.09 | acoR, Altekz, niko, valde, Zyphon |
|            4 |     3416 | 2024-09-04 | Young Ninjas      | L   | 0.044      | -            | -                | -                | -         |    -1.09 | acoR, Altekz, niko, valde, Zyphon |
|            3 |     3444 | 2024-09-03 | B8                | W   | 0.038      | 0.384        | 0.119 (0.002)    | -                | -         |     1.07 | acoR, Altekz, niko, valde, Zyphon |
|            2 |     3476 | 2024-09-02 | WildLotus         | W   | 0.030      | -            | -                | -                | -         |     0.51 | acoR, Altekz, niko, valde, Zyphon |
|            1 |     3569 | 2024-08-29 | MOUZ NXT          | L   | 0.004      | -            | -                | -                | -         |    -0.10 | acoR, Altekz, niko, valde, Zyphon |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,473.32)
- Divide that value by the 5th highest value among all rosters ($371,464.45)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      0.352 | $6,000.00      | $2,110.57       |
| 2024-10-05 |      0.250 | $5,000.00      | $1,250.21       |
| 2024-09-14 |      0.113 | $1,000.00      | $112.54         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
