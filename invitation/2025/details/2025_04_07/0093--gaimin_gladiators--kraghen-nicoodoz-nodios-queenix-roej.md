### Roster Details<br />
Team Name: Gaimin Gladiators<br />
Roster: kraghen, nicoodoz, Nodios, Queenix, roeJ<br />
Global Rank: [93](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_04_07.md)<br />
Regional Rank: [59]( ../../standings_europe_2025_04_07.md)<br />
<br />
Final Rank Value:  766.9<br />
<br />
Final Rank Value (766.9) = Starting Rank Value (741.0) + Head To Head Adjustments (25.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.378[<sup>1</sup>](#table2)
- Bounty Collected: 0.284[<sup>2</sup>](#table1)
- Opponent Network: 0.079[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.185<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 741.0
- 400 + ( ( 0.185 - 0.000 ) / ( 0.869 - 0.000 ) ) * 1600 = 741.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           38 |     1925 | 2024-12-09 | Apogee        | L   | 0.406      | -            | -                | -                | -         |    -4.96 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           37 |     1978 | 2024-12-07 | Fire Flux     | L   | 0.392      | -            | -                | -                | -         |    -5.86 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           36 |     2017 | 2024-12-05 | Chimera       | L   | 0.380      | -            | -                | -                | -         |    -6.39 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           35 |     2029 | 2024-12-05 | Sampi         | W   | 0.379      | 0.371        | 0.006 (0.001)    | -                | 0 (0.000) |     3.96 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           34 |     2055 | 2024-12-04 | Iberian Soul  | L   | 0.373      | -            | -                | -                | -         |    -3.81 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           33 |     2111 | 2024-12-01 | Iberian Soul  | L   | 0.353      | -            | -                | -                | -         |    -3.71 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           32 |     2131 | 2024-11-30 | Apogee        | W   | 0.348      | 0.354        | 0.016 (0.002)    | 1.000 (0.123)    | 0 (0.000) |     6.75 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           31 |     2166 | 2024-11-29 | NAVI Junior   | W   | 0.341      | 0.354        | 0.073 (0.009)    | 0.953 (0.115)    | 0 (0.000) |     8.04 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           30 |     2172 | 2024-11-29 | BC.Game       | L   | 0.339      | -            | -                | -                | -         |    -6.37 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           29 |     2177 | 2024-11-28 | GUN5          | W   | 0.335      | 0.354        | 0.081 (0.010)    | 0.930 (0.110)    | 0 (0.000) |     7.46 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           28 |     2188 | 2024-11-28 | Chimera       | W   | 0.332      | 0.333        | 0.012 (0.001)    | 0.429 (0.048)    | 0 (0.000) |     5.21 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           27 |     2192 | 2024-11-27 | Apogee        | L   | 0.328      | -            | -                | -                | -         |    -3.79 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           26 |     2195 | 2024-11-27 | Iberian Soul  | W   | 0.327      | 0.354        | 0.021 (0.002)    | 0.852 (0.099)    | 0 (0.000) |     7.28 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           25 |     2200 | 2024-11-27 | Apogee        | W   | 0.325      | 0.333        | 0.016 (0.002)    | 1.000 (0.108)    | 0 (0.000) |     6.63 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           24 |     2207 | 2024-11-26 | Iberian Soul  | L   | 0.321      | -            | -                | -                | -         |    -2.95 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           23 |     2215 | 2024-11-26 | Leo           | W   | 0.319      | 0.333        | 0.014 (0.002)    | 0.531 (0.056)    | 0 (0.000) |     4.79 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           22 |     2220 | 2024-11-25 | Fire Flux     | W   | 0.314      | 0.333        | -                | 0.864 (0.091)    | 0 (0.000) |     5.60 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           21 |     2243 | 2024-11-24 | Viperio       | W   | 0.305      | -            | -                | -                | 0 (0.000) |     2.94 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           20 |     2297 | 2024-11-22 | Apogee        | L   | 0.292      | -            | -                | -                | -         |    -3.12 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           19 |     2595 | 2024-11-10 | Zero Tenacity | L   | 0.215      | -            | -                | -                | -         |    -2.42 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           18 |     2619 | 2024-11-09 | 9 Pandas      | L   | 0.207      | -            | -                | -                | -         |    -1.18 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           17 |     2655 | 2024-11-07 | AMKAL         | W   | 0.194      | 0.384        | 0.012 (0.001)    | 0.118 (0.009)    | -         |     2.48 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           16 |     2658 | 2024-11-07 | 9INE          | W   | 0.193      | -            | -                | -                | -         |     2.17 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           15 |     2733 | 2024-11-03 | 9 Pandas      | L   | 0.166      | -            | -                | -                | -         |    -0.96 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           14 |     2781 | 2024-11-01 | HOTU          | W   | 0.153      | -            | -                | -                | -         |     0.98 | br0, kraghen, nicoodoz, Queenix, roeJ    |
|           13 |     2794 | 2024-10-31 | ECSTATIC      | L   | 0.147      | -            | -                | -                | -         |    -1.52 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           12 |     2836 | 2024-10-29 | Johnny Speeds | W   | 0.134      | 0.333        | 0.018 (0.001)    | -                | -         |     2.21 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           11 |     2840 | 2024-10-29 | Endpoint      | W   | 0.133      | -            | -                | -                | -         |     1.75 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           10 |     2860 | 2024-10-28 | Rebels        | W   | 0.125      | -            | -                | -                | -         |     1.48 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|            9 |     2870 | 2024-10-27 | AMKAL         | W   | 0.120      | 0.384        | -                | 0.718 (0.033)    | -         |     1.77 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|            8 |     2911 | 2024-10-26 | NAVI Junior   | L   | 0.112      | -            | -                | -                | -         |    -0.79 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|            7 |     2951 | 2024-10-23 | ECLOT         | W   | 0.092      | -            | -                | -                | -         |     0.99 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|            6 |     2989 | 2024-10-20 | FAVBET        | L   | 0.073      | -            | -                | -                | -         |    -1.15 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|            5 |     3012 | 2024-10-19 | 9INE          | W   | 0.067      | -            | -                | -                | -         |     0.74 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|            4 |     3132 | 2024-10-15 | GUN5          | W   | 0.038      | -            | -                | -                | -         |     0.89 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|            3 |     3165 | 2024-10-12 | GTZ           | W   | 0.020      | -            | -                | -                | -         |     0.49 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|            2 |     3180 | 2024-10-11 | HOTU          | W   | 0.013      | -            | -                | -                | -         |     0.08 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|            1 |     3190 | 2024-10-10 | CYBERSHOKE    | W   | 0.006      | -            | -                | -                | -         |     0.11 | kraghen, nicoodoz, Nodios, Queenix, roeJ |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,164.33)
- Divide that value by the 5th highest value among all rosters ($274,489.55)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-30 |      0.348 | $12,000.00     | $4,172.27       |
| 2024-11-29 |      0.339 | $3,000.00      | $1,016.04       |
| 2024-11-27 |      0.327 | $1,000.00      | $326.75         |
| 2024-11-12 |      0.227 | $500.00        | $113.46         |
| 2024-11-10 |      0.214 | $2,500.00      | $535.81         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
