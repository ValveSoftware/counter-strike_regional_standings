### Roster Details<br />
Team Name: NAVI Junior<br />
Roster: cmtry, dem0n, dziugss, Krabeni, makazze<br />
Global Rank: [48](../../standings_global_2024_11_25.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_11_25.md)<br />
Regional Rank: [37]( ../../standings_europe_2024_11_25.md)<br />
<br />
Final Rank Value:  1149.9<br />
<br />
Final Rank Value (1149.9) = Starting Rank Value (1018.1) + Head To Head Adjustments (131.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.539[<sup>1</sup>](#table2)
- Bounty Collected: 0.434[<sup>2</sup>](#table1)
- Opponent Network: 0.262[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.309<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1018.1
- 400 + ( ( 0.309 - 0.000 ) / ( 0.799 - 0.000 ) ) * 1600 = 1018.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           59 |       20 | 2024-11-24 | CPH Wolves        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.15 | cmtry, dem0n, dziugss, Krabeni, makazze |
|           58 |      373 | 2024-11-10 | ECLOT             | L   | 1.000      | -            | -                | -                | -         |   -12.21 | cmtry, dem0n, dziugss, Krabeni, makazze |
|           57 |      387 | 2024-11-09 | Nemiga            | W   | 1.000      | 0.426        | 0.478 (0.204)    | 0.798 (0.340)    | 0 (0.000) |    24.70 | cmtry, dem0n, dziugss, Krabeni, makazze |
|           56 |      392 | 2024-11-09 | 9 Pandas          | L   | 1.000      | -            | -                | -                | -         |   -11.60 | cmtry, dem0n, dziugss, Krabeni, makazze |
|           55 |      409 | 2024-11-08 | Aurora            | W   | 1.000      | 0.426        | 0.089 (0.038)    | -                | 0 (0.000) |    14.57 | cmtry, dem0n, dziugss, Krabeni, makazze |
|           54 |      419 | 2024-11-07 | OG                | W   | 1.000      | 0.426        | 0.147 (0.063)    | -                | 0 (0.000) |    13.15 | cmtry, dem0n, dziugss, Krabeni, makazze |
|           53 |      429 | 2024-11-07 | Rebels            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.91 | cmtry, dem0n, dziugss, Krabeni, makazze |
|           52 |      462 | 2024-11-05 | AMKAL             | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.41 | cmtry, dem0n, dziugss, Krabeni, makazze |
|           51 |      479 | 2024-11-04 | 9INE              | W   | 1.000      | 0.371        | 0.056 (0.021)    | 0.750 (0.278)    | 0 (0.000) |    13.52 | cmtry, dem0n, dziugss, Krabeni, makazze |
|           50 |      493 | 2024-11-03 | FAVBET            | L   | 1.000      | -            | -                | -                | -         |   -19.90 | cmtry, dem0n, dziugss, Krabeni, makazze |
|           49 |      548 | 2024-11-01 | 9 Pandas          | L   | 1.000      | -            | -                | -                | -         |   -11.83 | cmtry, dem0n, dziugss, Krabeni, makazze |
|           48 |      580 | 2024-10-30 | Spirit Academy    | W   | 1.000      | 0.426        | 0.066 (0.028)    | 0.702 (0.299)    | 0 (0.000) |    16.86 | cmtry, dem0n, dziugss, Krabeni, makazze |
|           47 |      586 | 2024-10-30 | CYBERSHOKE        | W   | 1.000      | 0.426        | -                | 0.560 (0.239)    | 0 (0.000) |     9.12 | cmtry, dem0n, dziugss, Krabeni, makazze |
|           46 |      623 | 2024-10-28 | ECSTATIC          | W   | 1.000      | 0.371        | -                | 0.813 (0.301)    | 0 (0.000) |    13.02 | cmtry, dem0n, dziugss, Krabeni, makazze |
|           45 |      640 | 2024-10-27 | DRILLAS           | W   | 1.000      | -            | -                | -                | -         |     8.86 | cmtry, dem0n, dziugss, Krabeni, makazze |
|           44 |      673 | 2024-10-26 | Gaimin Gladiators | W   | 1.000      | 0.354        | -                | 0.713 (0.252)    | -         |    13.78 | cmtry, dem0n, dziugss, Krabeni, makazze |
|           43 |      691 | 2024-10-25 | DRILLAS           | W   | 0.993      | -            | -                | -                | -         |     9.50 | cmtry, dem0n, dziugss, Krabeni, makazze |
|           42 |      711 | 2024-10-23 | WOPA              | W   | 0.981      | -            | -                | -                | -         |     5.79 | cmtry, dem0n, dziugss, Krabeni, makazze |
|           41 |      715 | 2024-10-23 | Aurora Young Blud | L   | 0.979      | -            | -                | -                | -         |   -21.29 | cmtry, coolio, dem0n, dziugss, makazze  |
|           40 |      722 | 2024-10-22 | kONO              | L   | 0.973      | -            | -                | -                | -         |   -21.21 | cmtry, dem0n, dziugss, Krabeni, makazze |
|           39 |      752 | 2024-10-20 | Aurora Young Blud | W   | 0.960      | 0.333        | -                | 0.682 (0.218)    | -         |     7.45 | cmtry, dem0n, dziugss, Krabeni, makazze |
|           38 |      760 | 2024-10-20 | Heimo             | W   | 0.959      | -            | -                | -                | -         |     2.75 | cmtry, dem0n, dziugss, Krabeni, makazze |
|           37 |      779 | 2024-10-19 | CYBERSHOKE        | W   | 0.954      | -            | -                | -                | -         |    10.08 | cmtry, dem0n, dziugss, Krabeni, makazze |
|           36 |      811 | 2024-10-18 | Viperio           | W   | 0.946      | -            | -                | -                | -         |     0.70 | cmtry, dem0n, dziugss, Krabeni, makazze |
|           35 |      931 | 2024-10-12 | ARCRED            | W   | 0.906      | -            | -                | -                | -         |     5.54 | cmtry, dem0n, dziugss, Krabeni, makazze |
|           34 |     1030 | 2024-10-08 | L&G               | W   | 0.879      | -            | -                | -                | -         |     7.08 | cmtry, dem0n, dziugss, Krabeni, makazze |
|           33 |     1054 | 2024-10-07 | UNiTY             | W   | 0.873      | 0.333        | 0.057 (0.017)    | -                | -         |    13.39 | cmtry, dem0n, dziugss, Krabeni, makazze |
|           32 |     1085 | 2024-10-06 | Heimo             | W   | 0.866      | -            | -                | -                | -         |     3.09 | cmtry, dem0n, dziugss, Krabeni, makazze |
|           31 |     1101 | 2024-10-05 | RUSH B            | L   | 0.861      | -            | -                | -                | -         |   -21.70 | cmtry, dem0n, dziugss, Krabeni, makazze |
|           30 |     1112 | 2024-10-05 | Illuminar         | W   | 0.860      | -            | -                | -                | -         |     9.95 | cmtry, dem0n, dziugss, Krabeni, makazze |
|           29 |     1141 | 2024-10-04 | Johnny Speeds     | L   | 0.854      | -            | -                | -                | -         |   -10.97 | cmtry, dem0n, dziugss, Krabeni, makazze |
|           28 |     1183 | 2024-10-03 | Viperio           | W   | 0.847      | -            | -                | -                | -         |     0.66 | cmtry, dem0n, dziugss, Krabeni, makazze |
|           27 |     1208 | 2024-10-02 | KOI               | W   | 0.842      | -            | -                | -                | -         |     6.97 | cmtry, dem0n, dziugss, Krabeni, makazze |
|           26 |     1278 | 2024-10-01 | Preasy            | L   | 0.832      | -            | -                | -                | -         |   -23.02 | cmtry, dem0n, dziugss, Krabeni, makazze |
|           25 |     1291 | 2024-09-30 | TALON             | W   | 0.827      | -            | -                | -                | -         |     2.66 | cmtry, dem0n, dziugss, Krabeni, makazze |
|           24 |     1325 | 2024-09-29 | ECSTATIC          | L   | 0.819      | -            | -                | -                | -         |   -14.66 | cmtry, dem0n, dziugss, Krabeni, makazze |
|           23 |     1443 | 2024-09-26 | Alliance          | L   | 0.801      | -            | -                | -                | -         |   -18.23 | cmtry, dem0n, dziugss, Krabeni, makazze |
|           22 |     1632 | 2024-09-21 | Spirit Academy    | W   | 0.767      | 0.372        | 0.066 (0.019)    | 0.702 (0.201)    | -         |     8.98 | cmtry, dem0n, dziugss, Krabeni, makazze |
|           21 |     1735 | 2024-09-18 | ECLOT             | W   | 0.746      | 0.333        | 0.187 (0.046)    | 1.000 (0.249)    | -         |    17.80 | cmtry, dem0n, dziugss, Krabeni, makazze |
|           20 |     1769 | 2024-09-17 | Spirit Academy    | W   | 0.739      | -            | -                | -                | -         |     9.46 | cmtry, dem0n, dziugss, Krabeni, makazze |
|           19 |     1781 | 2024-09-16 | ECLOT             | W   | 0.733      | 0.333        | 0.187 (0.046)    | 1.000 (0.244)    | -         |    18.46 | cmtry, dem0n, dziugss, Krabeni, makazze |
|           18 |     1787 | 2024-09-16 | Apogee            | W   | 0.732      | -            | -                | -                | -         |     5.31 | cmtry, dem0n, dziugss, Krabeni, makazze |
|           17 |     1814 | 2024-09-15 | Spirit Academy    | L   | 0.726      | -            | -                | -                | -         |   -13.15 | cmtry, dem0n, dziugss, Krabeni, makazze |
|           16 |     1840 | 2024-09-14 | ex-Enterprise     | W   | 0.720      | -            | -                | -                | -         |     7.40 | cmtry, dem0n, dziugss, Krabeni, makazze |
|           15 |     1870 | 2024-09-13 | Apogee            | W   | 0.714      | -            | -                | -                | -         |     5.20 | cmtry, dem0n, dziugss, Krabeni, makazze |
|           14 |     1904 | 2024-09-12 | Apogee            | W   | 0.707      | -            | -                | -                | -         |     5.00 | cmtry, dem0n, dziugss, Krabeni, makazze |
|           13 |     1932 | 2024-09-11 | Spirit Academy    | W   | 0.701      | 0.372        | 0.066 (0.017)    | -                | -         |    10.21 | cmtry, dem0n, dziugss, Krabeni, makazze |
|           12 |     1950 | 2024-09-11 | Astralis Talent   | W   | 0.699      | -            | -                | -                | -         |     3.61 | cmtry, dem0n, dziugss, Krabeni, makazze |
|           11 |     1984 | 2024-09-09 | Endpoint          | W   | 0.688      | -            | -                | -                | -         |     9.59 | cmtry, dem0n, dziugss, Krabeni, makazze |
|           10 |     2028 | 2024-09-07 | 500               | W   | 0.675      | -            | -                | -                | -         |     8.82 | cmtry, dem0n, dziugss, Krabeni, makazze |
|            9 |     2099 | 2024-09-05 | TNL               | W   | 0.661      | -            | -                | -                | -         |     2.73 | cmtry, dem0n, dziugss, Krabeni, makazze |
|            8 |     3054 | 2024-08-08 | Illuminar         | L   | 0.473      | -            | -                | -                | -         |    -6.86 | cmtry, dem0n, dziugss, Krabeni, makazze |
|            7 |     3143 | 2024-08-06 | UNiTY             | L   | 0.460      | -            | -                | -                | -         |    -6.55 | cmtry, dem0n, dziugss, Krabeni, makazze |
|            6 |     4498 | 2024-06-08 | Rhyno             | L   | 0.067      | -            | -                | -                | -         |    -0.35 | cmtry, dem0n, dziugss, froz1k, Krabeni  |
|            5 |     4617 | 2024-06-06 | Endpoint          | W   | 0.053      | -            | -                | -                | -         |     0.58 | cmtry, dem0n, dziugss, froz1k, Krabeni  |
|            4 |     4668 | 2024-06-05 | Sampi             | L   | 0.047      | -            | -                | -                | -         |    -0.57 | cmtry, dem0n, dziugss, froz1k, Krabeni  |
|            3 |     4719 | 2024-06-04 | MOUZ NXT          | L   | 0.040      | -            | -                | -                | -         |    -0.97 | cmtry, dem0n, dziugss, froz1k, Krabeni  |
|            2 |     4739 | 2024-06-03 | Entropiq          | W   | 0.034      | -            | -                | -                | -         |     0.03 | cmtry, dem0n, dziugss, froz1k, Krabeni  |
|            1 |     4847 | 2024-05-30 | Permitta          | L   | 0.008      | -            | -                | -                | -         |    -0.03 | cmtry, dem0n, dziugss, froz1k, Krabeni  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($55,617.64)
- Divide that value by the 5th highest value among all rosters ($398,927.16)
- The final value (0.14) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-11 |      1.000 | $3,000.00      | $3,000.00       |
| 2024-11-09 |      1.000 | $25,000.00     | $25,000.00      |
| 2024-10-27 |      1.000 | $6,000.00      | $6,000.00       |
| 2024-10-24 |      0.986 | $1,000.00      | $986.15         |
| 2024-10-08 |      0.879 | $6,000.00      | $5,274.29       |
| 2024-10-05 |      0.860 | $1,250.00      | $1,074.88       |
| 2024-09-21 |      0.767 | $7,000.00      | $5,372.42       |
| 2024-09-18 |      0.746 | $6,000.00      | $4,474.58       |
| 2024-09-17 |      0.739 | $6,000.00      | $4,435.31       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
