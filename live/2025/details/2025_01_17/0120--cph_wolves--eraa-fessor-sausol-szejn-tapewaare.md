### Roster Details<br />
Team Name: CPH Wolves<br />
Roster: eraa, Fessor, sausol, szejn, Tapewaare<br />
Global Rank: [120](../../standings_global_2025_01_17.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_17.md)<br />
Regional Rank: [87]( ../../standings_europe_2025_01_17.md)<br />
<br />
Final Rank Value:  814.7<br />
<br />
Final Rank Value (814.7) = Starting Rank Value (762.6) + Head To Head Adjustments (52.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.291[<sup>1</sup>](#table2)
- Bounty Collected: 0.345[<sup>2</sup>](#table1)
- Opponent Network: 0.096[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.183<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 762.6
- 400 + ( ( 0.183 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 762.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           48 |     1843 | 2024-10-01 | ALTERNATE aTTaX   | L   | 0.479      | -            | -                | -                | -         |    -3.55 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           47 |     1892 | 2024-09-29 | G2 Ares           | L   | 0.466      | -            | -                | -                | -         |   -11.60 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           46 |     1898 | 2024-09-29 | Into the Breach   | W   | 0.465      | 0.435        | -                | 0.512 (0.104)    | 0 (0.000) |     9.68 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           45 |     1944 | 2024-09-28 | K27               | W   | 0.457      | -            | -                | -                | 0 (0.000) |     3.25 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           44 |     1976 | 2024-09-27 | Passion UA        | L   | 0.452      | -            | -                | -                | -         |    -2.33 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           43 |     2010 | 2024-09-26 | GamerLegion       | L   | 0.446      | -            | -                | -                | -         |    -0.61 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           42 |     2082 | 2024-09-25 | Endpoint          | W   | 0.438      | 0.435        | 0.033 (0.006)    | 0.515 (0.098)    | 0 (0.000) |     7.91 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           41 |     2087 | 2024-09-25 | PeeP              | W   | 0.437      | -            | -                | -                | 0 (0.000) |     2.36 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           40 |     2132 | 2024-09-24 | K27               | L   | 0.431      | -            | -                | -                | -         |   -10.61 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           39 |     2155 | 2024-09-23 | ECSTATIC          | L   | 0.427      | -            | -                | -                | -         |    -3.85 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           38 |     2189 | 2024-09-22 | SovvyKiNG         | W   | 0.419      | -            | -                | -                | 0 (0.000) |     2.92 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           37 |     2195 | 2024-09-22 | Zero Tenacity     | W   | 0.417      | 0.435        | 0.083 (0.015)    | 0.570 (0.103)    | 0 (0.000) |    10.49 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           36 |     2212 | 2024-09-21 | FLuffy Gangsters  | W   | 0.413      | 0.143        | -                | 0.588 (0.035)    | 0 (0.000) |     5.63 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           35 |     2231 | 2024-09-20 | RUBY              | L   | 0.406      | -            | -                | -                | -         |   -10.04 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           34 |     2268 | 2024-09-19 | 9 Pandas          | W   | 0.400      | 0.435        | 0.159 (0.028)    | 0.802 (0.139)    | 0 (0.000) |    10.75 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           33 |     2273 | 2024-09-19 | Verdant           | W   | 0.399      | 0.143        | 0.050 (0.003)    | -                | 0 (0.000) |     8.43 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           32 |     2333 | 2024-09-17 | FAVBET            | L   | 0.386      | -            | -                | -                | -         |    -3.95 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|           31 |     2345 | 2024-09-17 | ALTERNATE aTTaX   | W   | 0.384      | 0.435        | 0.075 (0.012)    | 0.683 (0.114)    | 0 (0.000) |    10.14 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           30 |     2376 | 2024-09-15 | FLuffy Gangsters  | W   | 0.373      | 0.372        | -                | 0.588 (0.082)    | -         |     5.53 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|           29 |     2380 | 2024-09-15 | CYBERSHOKE        | L   | 0.372      | -            | -                | -                | -         |    -4.74 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           28 |     2439 | 2024-09-14 | FLuffy Gangsters  | W   | 0.363      | -            | -                | -                | -         |     5.49 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           27 |     2447 | 2024-09-13 | Daystar           | W   | 0.360      | -            | -                | -                | -         |     4.67 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|           26 |     2483 | 2024-09-12 | DMS               | W   | 0.352      | -            | -                | -                | -         |     4.34 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           25 |     2497 | 2024-09-12 | Astralis Talent   | L   | 0.351      | -            | -                | -                | -         |    -5.61 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           24 |     2518 | 2024-09-11 | ECLOT             | W   | 0.345      | 0.372        | 0.286 (0.037)    | 1.000 (0.129)    | -         |    10.39 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|           23 |     2535 | 2024-09-11 | ENCE Academy      | W   | 0.344      | -            | -                | -                | -         |     5.69 | eraa, Fessor, sense, szejn, Tapewaare      |
|           22 |     2562 | 2024-09-10 | Apogee            | L   | 0.337      | -            | -                | -                | -         |    -5.46 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|           21 |     2619 | 2024-09-07 | Endpoint          | L   | 0.319      | -            | -                | -                | -         |    -3.74 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|           20 |     2680 | 2024-09-05 | UNiTY             | W   | 0.306      | 0.372        | 0.070 (0.008)    | -                | -         |     7.25 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|           19 |     2745 | 2024-09-03 | L&G               | W   | 0.293      | 0.372        | 0.058 (0.006)    | 0.566 (0.062)    | -         |     5.76 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|           18 |     2797 | 2024-09-01 | Monte Gen         | L   | 0.279      | -            | -                | -                | -         |    -3.59 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|           17 |     2803 | 2024-09-01 | CYBERSHOKE        | L   | 0.278      | -            | -                | -                | -         |    -3.43 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|           16 |     2830 | 2024-08-30 | Endpoint          | L   | 0.266      | -            | -                | -                | -         |    -3.19 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|           15 |     2921 | 2024-08-28 | Aurora Young Blud | W   | 0.252      | 0.435        | 0.045 (0.005)    | 0.838 (0.092)    | -         |     5.82 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|           14 |     2970 | 2024-08-27 | Sampi             | L   | 0.247      | -            | -                | -                | -         |    -1.65 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|           13 |     3132 | 2024-08-24 | Kosovo            | W   | 0.224      | -            | -                | -                | -         |     1.68 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|           12 |     3147 | 2024-08-23 | Spirit Academy    | W   | 0.219      | 0.143        | 0.168 (0.005)    | -                | -         |     5.55 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|           11 |     3191 | 2024-08-22 | Preasy            | W   | 0.211      | -            | -                | -                | -         |     3.41 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|           10 |     3218 | 2024-08-21 | Spirit Academy    | L   | 0.206      | -            | -                | -                | -         |    -1.24 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|            9 |     3541 | 2024-08-12 | Young Ninjas      | L   | 0.144      | -            | -                | -                | -         |    -2.58 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|            8 |     3787 | 2024-08-04 | Kosovo            | L   | 0.091      | -            | -                | -                | -         |    -2.21 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|            7 |     3975 | 2024-07-30 | Passion UA        | L   | 0.060      | -            | -                | -                | -         |    -0.15 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|            6 |     4044 | 2024-07-28 | Sampi             | L   | 0.046      | -            | -                | -                | -         |    -0.31 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|            5 |     4069 | 2024-07-27 | 1WIN              | L   | 0.039      | -            | -                | -                | -         |    -0.81 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|            4 |     4177 | 2024-07-24 | SovvyKiNG         | W   | 0.018      | -            | -                | -                | -         |     0.14 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|            3 |     4206 | 2024-07-23 | Sampi             | L   | 0.013      | -            | -                | -                | -         |    -0.09 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|            2 |     4227 | 2024-07-22 | TSM               | W   | 0.007      | -            | -                | -                | -         |     0.14 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|            1 |     4238 | 2024-07-22 | SINNERS           | L   | 0.005      | -            | -                | -                | -         |    -0.02 | BøghmagiC, Fessor, sense, szejn, Tapewaare |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($823.82)
- Divide that value by the 5th highest value among all rosters ($225,816.70)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
