### Roster Details<br />
Team Name: STATE<br />
Roster: Altekz, kwezz, Queenix, sL1m3, Zanto<br />
Global Rank: [118](../../standings_global_2026_11_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_11_02.md)<br />
Regional Rank: [85]( ../../standings_europe_2026_11_02.md)<br />
<br />
Final Rank Value:  982.0<br />
<br />
Final Rank Value (982.0) = Starting Rank Value (972.3) + Head To Head Adjustments (9.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.376[<sup>1</sup>](#table2)
- Bounty Collected: 0.296[<sup>2</sup>](#table1)
- Opponent Network: 0.128[<sup>2</sup>](#table1)
- LAN Wins: 0.421[<sup>2</sup>](#table1)

The average of these factors is 0.305<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 972.3
- 400 + ( ( 0.305 - 0.000 ) / ( 0.854 - 0.000 ) ) * 1600 = 972.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           30 |      209 | 2026-10-25 | The Last Resort  | W   | 1.000      | 0.347        | 0.022 (0.008)    | 0.415 (0.144)    | 1 (1.000) |    15.75 | Altekz, kwezz, Queenix, sL1m3, Zanto  |
|           29 |      217 | 2026-10-25 | G2 Ares          | W   | 1.000      | 0.347        | 0.009 (0.003)    | 0.715 (0.249)    | 1 (1.000) |    15.04 | Altekz, kwezz, Queenix, sL1m3, Zanto  |
|           28 |      241 | 2026-10-24 | The Last Resort  | L   | 1.000      | -            | -                | -                | -         |   -15.05 | Altekz, kwezz, Queenix, sL1m3, Zanto  |
|           27 |      257 | 2026-10-24 | overTIME         | W   | 1.000      | 0.347        | 0.002 (0.001)    | -                | 1 (1.000) |     4.21 | Altekz, kwezz, Queenix, sL1m3, Zanto  |
|           26 |     1017 | 2026-10-07 | HOTU             | L   | 1.000      | -            | -                | -                | -         |    -1.80 | Altekz, kwezz, Queenix, sL1m3, Zanto  |
|           25 |     1494 | 2026-09-26 | G2 Ares          | W   | 0.952      | 0.315        | 0.009 (0.003)    | 0.715 (0.214)    | -         |    15.07 | Altekz, kwezz, Queenix, sL1m3, Zanto  |
|           24 |     1535 | 2026-09-25 | BAKS             | L   | 0.947      | -            | -                | -                | -         |   -10.90 | Altekz, kwezz, Queenix, sL1m3, Zanto  |
|           23 |     1546 | 2026-09-25 | Famalicão        | W   | 0.947      | 0.315        | -                | 0.121 (0.036)    | -         |     3.73 | Altekz, kwezz, Queenix, sL1m3, Zanto  |
|           22 |     1677 | 2026-09-23 | Illyrians        | L   | 0.935      | -            | -                | -                | -         |   -17.04 | Altekz, kwezz, Queenix, sL1m3, Zanto  |
|           21 |     1713 | 2026-09-23 | ex-Zero Tenacity | W   | 0.933      | 0.371        | 0.047 (0.016)    | 1.000 (0.346)    | -         |    17.75 | Altekz, kwezz, Queenix, sL1m3, Zanto  |
|           20 |     1766 | 2026-09-22 | KAMUI            | W   | 0.927      | 0.371        | 0.001 (0.000)    | 0.113 (0.039)    | -         |     6.17 | Dengzoe, kwezz, Queenix, sL1m3, Zanto |
|           19 |     1843 | 2026-09-20 | Toobisie         | W   | 0.912      | 0.371        | -                | 0.116 (0.039)    | -         |     5.01 | Dengzoe, kwezz, Queenix, sL1m3, Zanto |
|           18 |     2831 | 2026-08-29 | ex-Zero Tenacity | L   | 0.767      | -            | -                | -                | -         |    -9.79 | kwezz, Patti, Queenix, sL1m3, Zanto   |
|           17 |     2842 | 2026-08-29 | 9INE             | L   | 0.766      | -            | -                | -                | -         |   -10.26 | kwezz, Patti, Queenix, sL1m3, Zanto   |
|           16 |     2893 | 2026-08-28 | G2 Ares          | L   | 0.759      | -            | -                | -                | -         |    -9.99 | kwezz, Patti, Queenix, sL1m3, Zanto   |
|           15 |     2915 | 2026-08-27 | ENCE             | W   | 0.754      | 0.371        | 0.014 (0.004)    | 0.553 (0.155)    | -         |    15.60 | kwezz, Patti, Queenix, sL1m3, Zanto   |
|           14 |     2942 | 2026-08-27 | GenOne           | L   | 0.752      | -            | -                | -                | -         |    -5.05 | kwezz, Patti, Queenix, sL1m3, Zanto   |
|           13 |     3720 | 2026-07-31 | CYBERSHOKE       | L   | 0.574      | -            | -                | -                | -         |    -9.04 | kwezz, Patti, Queenix, sL1m3, Zanto   |
|           12 |     3800 | 2026-07-29 | Fortress         | W   | 0.558      | 0.396        | 0.000 (0.000)    | 0.127 (0.028)    | -         |     2.58 | kwezz, Patti, Queenix, sL1m3, Zanto   |
|           11 |     3886 | 2026-07-26 | Lazer Cats       | L   | 0.540      | -            | -                | -                | -         |    -5.62 | kwezz, Patti, Queenix, sL1m3, Zanto   |
|           10 |     3939 | 2026-07-25 | Fortress         | W   | 0.531      | -            | -                | -                | -         |     2.27 | kwezz, Patti, Queenix, sL1m3, Zanto   |
|            9 |     4722 | 2026-06-13 | MASQ             | W   | 0.254      | -            | -                | -                | 1 (0.254) |     0.96 | kwezz, Patti, sL1m3, thamlike, Zanto  |
|            8 |     4735 | 2026-06-13 | MASONIC          | L   | 0.253      | -            | -                | -                | -         |    -6.55 | kwezz, Patti, sL1m3, thamlike, Zanto  |
|            7 |     4771 | 2026-06-12 | Washed           | W   | 0.248      | 0.357        | 0.003 (0.000)    | -                | 1 (0.248) |     1.17 | kwezz, Patti, sL1m3, thamlike, Zanto  |
|            6 |     4780 | 2026-06-12 | ex-Sashi Academy | W   | 0.247      | -            | -                | -                | 1 (0.247) |     1.03 | kwezz, Patti, sL1m3, thamlike, Zanto  |
|            5 |     5330 | 2026-05-24 | 100 Thieves      | W   | 0.120      | 0.341        | 0.174 (0.007)    | 0.786 (0.032)    | 1 (0.120) |     3.61 | kwezz, Patti, sL1m3, thamlike, Zanto  |
|            4 |     5340 | 2026-05-24 | Fortress         | W   | 0.120      | -            | -                | -                | 1 (0.120) |     0.57 | kwezz, Patti, sL1m3, thamlike, Zanto  |
|            3 |     5348 | 2026-05-24 | 100 Thieves      | L   | 0.119      | -            | -                | -                | -         |    -0.18 | kwezz, Patti, sL1m3, thamlike, Zanto  |
|            2 |     5384 | 2026-05-23 | Invicta          | W   | 0.113      | -            | -                | -                | 1 (0.113) |     0.36 | kwezz, Patti, sL1m3, thamlike, Zanto  |
|            1 |     5412 | 2026-05-23 | 95 Vikings       | W   | 0.111      | -            | -                | -                | 1 (0.111) |     0.14 | kwezz, Patti, sL1m3, thamlike, Zanto  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($12,040.53)
- Divide that value by the 5th highest value among all rosters ($549,790.68)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-10-25 |      1.000 | $6,621.00      | $6,621.00       |
| 2026-09-23 |      0.935 | $4,000.00      | $3,738.10       |
| 2026-08-30 |      0.775 | $750.00        | $580.90         |
| 2026-06-13 |      0.254 | $1,578.00      | $400.89         |
| 2026-05-24 |      0.120 | $5,809.00      | $699.64         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
