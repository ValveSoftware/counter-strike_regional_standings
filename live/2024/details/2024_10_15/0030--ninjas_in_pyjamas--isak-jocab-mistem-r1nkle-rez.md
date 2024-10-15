### Roster Details<br />
Team Name: Ninjas in Pyjamas<br />
Roster: isak, jocab, MisteM, r1nkle, REZ<br />
Global Rank: [30](../../standings_global_2024_10_15.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_15.md)<br />
Regional Rank: [19]( ../../standings_europe_2024_10_15.md)<br />
<br />
Final Rank Value:  1170.7<br />
<br />
Final Rank Value (1170.7) = Starting Rank Value (1213.8) + Head To Head Adjustments (-43.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.533[<sup>1</sup>](#table2)
- Bounty Collected: 0.482[<sup>2</sup>](#table1)
- Opponent Network: 0.155[<sup>2</sup>](#table1)
- LAN Wins: 0.506[<sup>2</sup>](#table1)

The average of these factors is 0.419<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1213.8
- 400 + ( ( 0.419 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 1213.8


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
|           32 |      261 | 2024-10-04 | ECSTATIC      | L   | 1.000      | -            | -                | -                | -         |   -22.45 | isak, jocab, MisteM, r1nkle, REZ |
|           31 |     1148 | 2024-09-07 | HEROIC        | L   | 0.947      | -            | -                | -                | -         |    -5.92 | alex, isak, maxster, r1nkle, REZ |
|           30 |     1199 | 2024-09-05 | FaZe          | L   | 0.935      | -            | -                | -                | -         |    -2.06 | alex, isak, maxster, r1nkle, REZ |
|           29 |     1248 | 2024-09-04 | Natus Vincere | L   | 0.928      | -            | -                | -                | -         |    -0.40 | alex, isak, maxster, r1nkle, REZ |
|           28 |     1282 | 2024-09-03 | HEROIC        | W   | 0.921      | 0.889        | 0.256 (0.210)    | 0.433 (0.355)    | 1 (0.921) |    24.16 | alex, isak, maxster, r1nkle, REZ |
|           27 |     1389 | 2024-08-29 | Monte         | L   | 0.888      | -            | -                | -                | -         |   -20.84 | alex, isak, maxster, r1nkle, REZ |
|           26 |     1400 | 2024-08-29 | GUN5          | L   | 0.887      | -            | -                | -                | -         |   -22.08 | alex, isak, maxster, r1nkle, REZ |
|           25 |     1745 | 2024-08-21 | AMKAL         | L   | 0.835      | -            | -                | -                | -         |   -21.74 | alex, isak, maxster, r1nkle, REZ |
|           24 |     1845 | 2024-08-19 | Cloud9        | L   | 0.821      | -            | -                | -                | -         |   -21.76 | alex, isak, maxster, r1nkle, REZ |
|           23 |     1852 | 2024-08-19 | PARIVISION    | W   | 0.821      | -            | -                | -                | -         |     6.14 | alex, isak, maxster, r1nkle, REZ |
|           22 |     2315 | 2024-08-04 | Astralis      | L   | 0.720      | -            | -                | -                | -         |    -6.71 | alex, isak, maxster, r1nkle, REZ |
|           21 |     2339 | 2024-08-03 | G2            | L   | 0.714      | -            | -                | -                | -         |    -0.47 | alex, isak, maxster, r1nkle, REZ |
|           20 |     2377 | 2024-08-02 | FaZe          | W   | 0.707      | 0.581        | 0.520 (0.214)    | 0.318 (0.131)    | 1 (0.707) |    20.48 | alex, isak, maxster, r1nkle, REZ |
|           19 |     2421 | 2024-08-01 | Cloud9        | W   | 0.700      | 0.581        | 0.087 (0.035)    | 0.376 (0.153)    | 1 (0.700) |     2.95 | alex, isak, maxster, r1nkle, REZ |
|           18 |     2473 | 2024-07-31 | G2            | L   | 0.693      | -            | -                | -                | -         |    -0.42 | alex, isak, maxster, r1nkle, REZ |
|           17 |     2827 | 2024-07-20 | Passion UA    | L   | 0.620      | -            | -                | -                | -         |   -14.43 | alex, isak, maxster, r1nkle, REZ |
|           16 |     2901 | 2024-07-18 | MOUZ NXT      | W   | 0.608      | 0.500        | -                | 0.435 (0.132)    | -         |     2.84 | alex, isak, maxster, r1nkle, REZ |
|           15 |     3033 | 2024-07-16 | Nexus         | W   | 0.595      | 0.500        | -                | 0.463 (0.138)    | -         |     1.15 | alex, isak, maxster, r1nkle, REZ |
|           14 |     3295 | 2024-06-16 | fnatic        | L   | 0.395      | -            | -                | -                | -         |    -7.15 | alex, isak, maxster, r1nkle, REZ |
|           13 |     3356 | 2024-06-14 | paiN          | W   | 0.383      | 0.548        | 0.265 (0.056)    | 0.773 (0.162)    | 1 (0.383) |     9.57 | alex, isak, maxster, r1nkle, REZ |
|           12 |     3364 | 2024-06-14 | 9z            | W   | 0.381      | 0.548        | 0.236 (0.049)    | -                | 1 (0.381) |     6.54 | alex, isak, maxster, r1nkle, REZ |
|           11 |     3525 | 2024-06-09 | The MongolZ   | L   | 0.347      | -            | -                | -                | -         |    -0.64 | alex, isak, maxster, r1nkle, REZ |
|           10 |     3591 | 2024-06-08 | FURIA         | W   | 0.341      | 0.715        | 0.336 (0.082)    | 0.508 (0.124)    | 1 (0.341) |     9.90 | alex, isak, maxster, r1nkle, REZ |
|            9 |     3641 | 2024-06-07 | fnatic        | W   | 0.335      | 0.715        | 0.217 (0.052)    | 0.438 (0.105)    | 1 (0.335) |     4.84 | alex, isak, maxster, r1nkle, REZ |
|            8 |     3707 | 2024-06-06 | Sashi         | W   | 0.328      | 0.715        | 0.100 (0.023)    | 0.634 (0.149)    | 1 (0.328) |     2.33 | alex, isak, maxster, r1nkle, REZ |
|            7 |     3729 | 2024-06-06 | The MongolZ   | L   | 0.327      | -            | -                | -                | -         |    -0.53 | alex, isak, maxster, r1nkle, REZ |
|            6 |     3741 | 2024-06-06 | Astralis      | W   | 0.325      | 0.715        | 0.261 (0.061)    | -                | 1 (0.325) |     7.36 | alex, isak, maxster, r1nkle, REZ |
|            5 |     3775 | 2024-06-05 | HEROIC        | W   | 0.321      | 0.715        | 0.256 (0.059)    | 0.433 (0.099)    | 1 (0.321) |     8.78 | alex, isak, maxster, r1nkle, REZ |
|            4 |     3792 | 2024-06-05 | ENCE          | W   | 0.319      | -            | -                | -                | -         |     2.74 | alex, isak, maxster, r1nkle, REZ |
|            3 |     4239 | 2024-05-19 | Sangal        | L   | 0.208      | -            | -                | -                | -         |    -3.07 | alex, isak, maxster, r1nkle, REZ |
|            2 |     4265 | 2024-05-18 | Metizport     | L   | 0.201      | -            | -                | -                | -         |    -5.40 | alex, isak, maxster, r1nkle, REZ |
|            1 |     4340 | 2024-05-16 | Sangal        | W   | 0.188      | -            | -                | -                | -         |     3.13 | alex, isak, maxster, r1nkle, REZ |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($41,103.22)
- Divide that value by the 5th highest value among all rosters ($308,815.62)
- The final value (0.13) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-22 |      1.000 | $7,000.00      | $7,000.00       |
| 2024-08-25 |      0.861 | $5,000.00      | $4,307.13       |
| 2024-08-04 |      0.720 | $10,500.00     | $7,564.10       |
| 2024-06-16 |      0.396 | $7,000.00      | $2,773.89       |
| 2024-06-09 |      0.347 | $56,000.00     | $19,458.09      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
