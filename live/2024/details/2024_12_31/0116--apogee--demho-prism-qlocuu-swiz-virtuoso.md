### Roster Details<br />
Team Name: Apogee<br />
Roster: Demho, Prism, Qlocuu, swiz, virtuoso<br />
Global Rank: [116](../../standings_global_2024_12_31.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_12_31.md)<br />
Regional Rank: [84]( ../../standings_europe_2024_12_31.md)<br />
<br />
Final Rank Value:  825.1<br />
<br />
Final Rank Value (825.1) = Starting Rank Value (764.8) + Head To Head Adjustments (60.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.336[<sup>1</sup>](#table2)
- Bounty Collected: 0.327[<sup>2</sup>](#table1)
- Opponent Network: 0.086[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.187<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 764.8
- 400 + ( ( 0.187 - 0.000 ) / ( 0.821 - 0.000 ) ) * 1600 = 764.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           36 |     1335 | 2024-10-18 | NewBALLS          | L   | 0.718      | -            | -                | -                | -         |   -19.00 | Demho, Prism, Qlocuu, swiz, virtuoso |
|           35 |     1419 | 2024-10-14 | ECLOT             | L   | 0.693      | -            | -                | -                | -         |    -2.35 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           34 |     1459 | 2024-10-11 | Insomnia          | L   | 0.673      | -            | -                | -                | -         |   -16.27 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           33 |     1471 | 2024-10-10 | 500 Rush          | L   | 0.666      | -            | -                | -                | -         |   -16.64 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           32 |     1674 | 2024-10-04 | TSM               | L   | 0.624      | -            | -                | -                | -         |    -7.26 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           31 |     1705 | 2024-10-03 | Passion UA        | L   | 0.618      | -            | -                | -                | -         |    -3.79 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           30 |     1730 | 2024-10-02 | Betera            | W   | 0.613      | -            | -                | -                | 0 (0.000) |     5.05 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           29 |     1780 | 2024-10-01 | Rebels            | W   | 0.607      | 0.500        | 0.034 (0.010)    | 0.360 (0.109)    | 0 (0.000) |    10.19 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           28 |     1796 | 2024-10-01 | TSM               | W   | 0.605      | 0.371        | 0.037 (0.008)    | 0.519 (0.116)    | 0 (0.000) |    12.58 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           27 |     1847 | 2024-09-29 | ALTERNATE aTTaX   | W   | 0.591      | 0.371        | 0.073 (0.016)    | 0.760 (0.166)    | 0 (0.000) |    14.21 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           26 |     1874 | 2024-09-28 | 9z                | L   | 0.586      | -            | -                | -                | -         |    -4.88 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           25 |     1905 | 2024-09-27 | OG                | W   | 0.580      | 0.143        | 0.157 (0.013)    | -                | 0 (0.000) |    12.15 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           24 |     1920 | 2024-09-27 | SAW               | L   | 0.579      | -            | -                | -                | -         |    -0.67 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           23 |     1927 | 2024-09-27 | Verdant           | W   | 0.578      | 0.371        | 0.042 (0.009)    | 0.421 (0.090)    | 0 (0.000) |    10.69 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           22 |     1955 | 2024-09-26 | ARCRED            | W   | 0.573      | 0.143        | 0.042 (0.003)    | -                | 0 (0.000) |     8.31 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           21 |     1963 | 2024-09-26 | Gaimin Gladiators | W   | 0.573      | 0.143        | 0.071 (0.006)    | 0.923 (0.076)    | 0 (0.000) |    13.09 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           20 |     2065 | 2024-09-24 | Monte             | L   | 0.560      | -            | -                | -                | -         |    -3.29 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           19 |     2099 | 2024-09-23 | Illuminar         | W   | 0.554      | -            | -                | -                | 0 (0.000) |    12.68 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           18 |     2113 | 2024-09-23 | Johnny Speeds     | L   | 0.552      | -            | -                | -                | -         |    -2.99 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           17 |     2224 | 2024-09-19 | Verdant           | W   | 0.524      | 0.371        | 0.042 (0.008)    | 0.421 (0.082)    | 0 (0.000) |    11.04 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           16 |     2310 | 2024-09-16 | NAVI Junior       | L   | 0.504      | -            | -                | -                | -         |    -2.91 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           15 |     2333 | 2024-09-15 | L&G               | L   | 0.499      | -            | -                | -                | -         |    -6.83 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           14 |     2345 | 2024-09-15 | Astralis Talent   | W   | 0.497      | 0.333        | -                | 0.455 (0.076)    | -         |     7.42 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           13 |     2377 | 2024-09-14 | ENCE Academy      | W   | 0.491      | 0.333        | -                | 0.292 (0.048)    | -         |     7.26 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           12 |     2393 | 2024-09-13 | NAVI Junior       | L   | 0.486      | -            | -                | -                | -         |    -2.71 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           11 |     2402 | 2024-09-13 | UNiTY             | W   | 0.485      | 0.333        | 0.064 (0.010)    | 0.319 (0.052)    | -         |    10.97 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           10 |     2427 | 2024-09-12 | NAVI Junior       | L   | 0.479      | -            | -                | -                | -         |    -2.61 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|            9 |     2464 | 2024-09-11 | JiJieHao          | W   | 0.472      | -            | -                | -                | -         |     5.80 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|            8 |     2502 | 2024-09-10 | CPH Wolves        | W   | 0.464      | -            | -                | -                | -         |     6.97 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|            7 |     2577 | 2024-09-06 | GUN5              | L   | 0.441      | -            | -                | -                | -         |    -2.12 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|            6 |     2608 | 2024-09-05 | SovvyKiNG         | W   | 0.434      | 0.500        | -                | 0.230 (0.050)    | -         |     3.86 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|            5 |     3660 | 2024-08-06 | SINNERS           | L   | 0.233      | -            | -                | -                | -         |    -0.89 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|            4 |     3880 | 2024-07-31 | SAW               | L   | 0.193      | -            | -                | -                | -         |    -0.18 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|            3 |     4150 | 2024-07-23 | Sangal            | L   | 0.139      | -            | -                | -                | -         |    -0.30 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|            2 |     4381 | 2024-07-17 | RUSH B            | W   | 0.100      | 0.500        | 0.055 (0.003)    | -                | -         |     2.06 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|            1 |     4497 | 2024-07-15 | Rebels            | W   | 0.086      | -            | -                | -                | -         |     1.64 | POLO, Prism, Qlocuu, swiz, virtuoso  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,135.98)
- Divide that value by the 5th highest value among all rosters ($298,653.52)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      0.733 | $1,000.00      | $732.55         |
| 2024-10-05 |      0.631 | $3,000.00      | $1,892.49       |
| 2024-09-17 |      0.511 | $1,000.00      | $510.94         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
