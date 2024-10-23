### Roster Details<br />
Team Name: Ninjas in Pyjamas<br />
Roster: isak, jocab, MisteM, r1nkle, REZ<br />
Global Rank: [35](../../standings_global_2024_10_23.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_23.md)<br />
Regional Rank: [23]( ../../standings_europe_2024_10_23.md)<br />
<br />
Final Rank Value:  1173.5<br />
<br />
Final Rank Value (1173.5) = Starting Rank Value (1226.1) + Head To Head Adjustments (-52.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.552[<sup>1</sup>](#table2)
- Bounty Collected: 0.507[<sup>2</sup>](#table1)
- Opponent Network: 0.164[<sup>2</sup>](#table1)
- LAN Wins: 0.462[<sup>2</sup>](#table1)

The average of these factors is 0.422<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1226.1
- 400 + ( ( 0.422 - 0.000 ) / ( 0.816 - 0.000 ) ) * 1600 = 1226.1


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
|           35 |        1 | 2024-10-23 | Imperial      | W   | 1.000      | 0.477        | 0.161 (0.077)    | 0.573 (0.273)    | -         |    16.79 | isak, jocab, MisteM, r1nkle, REZ |
|           34 |      146 | 2024-10-16 | JANO          | L   | 1.000      | -            | -                | -                | -         |   -24.40 | isak, jocab, MisteM, r1nkle, REZ |
|           33 |      159 | 2024-10-16 | B8            | L   | 1.000      | -            | -                | -                | -         |   -14.99 | isak, jocab, MisteM, r1nkle, REZ |
|           32 |      439 | 2024-10-04 | ECSTATIC      | L   | 1.000      | -            | -                | -                | -         |   -22.83 | isak, jocab, MisteM, r1nkle, REZ |
|           31 |     1326 | 2024-09-07 | HEROIC        | L   | 0.893      | -            | -                | -                | -         |    -3.52 | alex, isak, maxster, r1nkle, REZ |
|           30 |     1377 | 2024-09-05 | FaZe          | L   | 0.880      | -            | -                | -                | -         |    -1.95 | alex, isak, maxster, r1nkle, REZ |
|           29 |     1426 | 2024-09-04 | Natus Vincere | L   | 0.873      | -            | -                | -                | -         |    -0.41 | alex, isak, maxster, r1nkle, REZ |
|           28 |     1460 | 2024-09-03 | HEROIC        | W   | 0.866      | 0.889        | 0.417 (0.321)    | 0.516 (0.397)    | 1 (0.866) |    24.47 | alex, isak, maxster, r1nkle, REZ |
|           27 |     1567 | 2024-08-29 | Monte         | L   | 0.834      | -            | -                | -                | -         |   -19.69 | alex, isak, maxster, r1nkle, REZ |
|           26 |     1578 | 2024-08-29 | GUN5          | L   | 0.833      | -            | -                | -                | -         |   -21.00 | alex, isak, maxster, r1nkle, REZ |
|           25 |     1923 | 2024-08-21 | AMKAL         | L   | 0.781      | -            | -                | -                | -         |   -20.35 | alex, isak, maxster, r1nkle, REZ |
|           24 |     2023 | 2024-08-19 | Cloud9        | L   | 0.766      | -            | -                | -                | -         |   -20.19 | alex, isak, maxster, r1nkle, REZ |
|           23 |     2030 | 2024-08-19 | PARIVISION    | W   | 0.766      | -            | -                | -                | -         |     7.22 | alex, isak, maxster, r1nkle, REZ |
|           22 |     2493 | 2024-08-04 | Astralis      | L   | 0.665      | -            | -                | -                | -         |    -6.90 | alex, isak, maxster, r1nkle, REZ |
|           21 |     2517 | 2024-08-03 | G2            | L   | 0.660      | -            | -                | -                | -         |    -0.46 | alex, isak, maxster, r1nkle, REZ |
|           20 |     2555 | 2024-08-02 | FaZe          | W   | 0.653      | 0.581        | 0.558 (0.212)    | 0.304 (0.115)    | 1 (0.653) |    18.90 | alex, isak, maxster, r1nkle, REZ |
|           19 |     2599 | 2024-08-01 | Cloud9        | W   | 0.645      | 0.581        | -                | 0.398 (0.149)    | 1 (0.645) |     2.77 | alex, isak, maxster, r1nkle, REZ |
|           18 |     2651 | 2024-07-31 | G2            | L   | 0.639      | -            | -                | -                | -         |    -0.40 | alex, isak, maxster, r1nkle, REZ |
|           17 |     3005 | 2024-07-20 | Passion UA    | L   | 0.566      | -            | -                | -                | -         |   -12.89 | alex, isak, maxster, r1nkle, REZ |
|           16 |     3079 | 2024-07-18 | MOUZ NXT      | W   | 0.553      | 0.500        | -                | 0.384 (0.106)    | -         |     2.26 | alex, isak, maxster, r1nkle, REZ |
|           15 |     3211 | 2024-07-16 | Nexus         | W   | 0.540      | 0.500        | -                | 0.513 (0.139)    | -         |     1.07 | alex, isak, maxster, r1nkle, REZ |
|           14 |     3473 | 2024-06-16 | fnatic        | L   | 0.341      | -            | -                | -                | -         |    -4.36 | alex, isak, maxster, r1nkle, REZ |
|           13 |     3534 | 2024-06-14 | paiN          | W   | 0.328      | 0.548        | 0.345 (0.062)    | 0.759 (0.137)    | 1 (0.328) |     8.43 | alex, isak, maxster, r1nkle, REZ |
|           12 |     3542 | 2024-06-14 | 9z            | W   | 0.327      | 0.548        | 0.271 (0.049)    | -                | 1 (0.327) |     5.97 | alex, isak, maxster, r1nkle, REZ |
|           11 |     3703 | 2024-06-09 | The MongolZ   | L   | 0.293      | -            | -                | -                | -         |    -0.39 | alex, isak, maxster, r1nkle, REZ |
|           10 |     3769 | 2024-06-08 | FURIA         | W   | 0.286      | 0.715        | 0.358 (0.073)    | 0.484 (0.099)    | 1 (0.286) |     8.32 | alex, isak, maxster, r1nkle, REZ |
|            9 |     3819 | 2024-06-07 | fnatic        | W   | 0.280      | 0.715        | 0.314 (0.063)    | 0.508 (0.102)    | 1 (0.280) |     5.58 | alex, isak, maxster, r1nkle, REZ |
|            8 |     3885 | 2024-06-06 | Sashi         | W   | 0.273      | 0.715        | -                | 0.653 (0.128)    | 1 (0.273) |     1.92 | alex, isak, maxster, r1nkle, REZ |
|            7 |     3907 | 2024-06-06 | The MongolZ   | L   | 0.272      | -            | -                | -                | -         |    -0.32 | alex, isak, maxster, r1nkle, REZ |
|            6 |     3919 | 2024-06-06 | Astralis      | W   | 0.271      | 0.715        | 0.263 (0.051)    | -                | 1 (0.271) |     5.79 | alex, isak, maxster, r1nkle, REZ |
|            5 |     3953 | 2024-06-05 | HEROIC        | W   | 0.266      | 0.715        | 0.417 (0.079)    | -                | 1 (0.266) |     7.80 | alex, isak, maxster, r1nkle, REZ |
|            4 |     3970 | 2024-06-05 | ENCE          | W   | 0.265      | 0.715        | 0.442 (0.084)    | -                | -         |     6.57 | alex, isak, maxster, r1nkle, REZ |
|            3 |     4417 | 2024-05-19 | Sangal        | L   | 0.154      | -            | -                | -                | -         |    -0.94 | alex, isak, maxster, r1nkle, REZ |
|            2 |     4443 | 2024-05-18 | Metizport     | L   | 0.147      | -            | -                | -                | -         |    -3.90 | alex, isak, maxster, r1nkle, REZ |
|            1 |     4518 | 2024-05-16 | Sangal        | W   | 0.133      | -            | -                | -                | -         |     3.39 | alex, isak, maxster, r1nkle, REZ |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($41,760.26)
- Divide that value by the 5th highest value among all rosters ($270,964.47)
- The final value (0.15) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-09-22 |      0.993 | $7,000.00      | $6,954.40       |
| 2024-08-25 |      0.807 | $5,000.00      | $4,033.41       |
| 2024-08-04 |      0.666 | $10,500.00     | $6,989.30       |
| 2024-06-16 |      0.342 | $7,000.00      | $2,390.69       |
| 2024-06-09 |      0.293 | $56,000.00     | $16,392.46      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
