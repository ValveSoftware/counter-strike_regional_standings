### Roster Details<br />
Team Name: Fire Flux<br />
Roster: Banjo, duggy, paz, ScrunK, soulfly<br />
Global Rank: [89](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_07_07.md)<br />
Regional Rank: [60]( ../../standings_europe_2025_07_07.md)<br />
<br />
Final Rank Value:  832.0<br />
<br />
Final Rank Value (832.0) = Starting Rank Value (823.1) + Head To Head Adjustments (8.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.287[<sup>1</sup>](#table2)
- Bounty Collected: 0.360[<sup>2</sup>](#table1)
- Opponent Network: 0.259[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.227<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 823.1
- 400 + ( ( 0.227 - 0.000 ) / ( 0.858 - 0.000 ) ) * 1600 = 823.1


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
|           70 |      171 | 2025-06-15 | Marius            | L   | 1.000      | -            | -                | -                | -         |   -20.97 | Banjo, duggy, paz, ScrunK, soulfly  |
|           69 |      248 | 2025-06-13 | RUBY              | L   | 1.000      | -            | -                | -                | -         |   -13.16 | Banjo, duggy, paz, ScrunK, soulfly  |
|           68 |      329 | 2025-06-09 | Astrum            | L   | 1.000      | -            | -                | -                | -         |    -8.11 | Banjo, duggy, paz, ScrunK, soulfly  |
|           67 |      365 | 2025-06-07 | Nexus             | W   | 0.998      | 0.480        | 0.087 (0.042)    | 1.000 (0.479)    | 0 (0.000) |    21.56 | Banjo, duggy, paz, ScrunK, soulfly  |
|           66 |      451 | 2025-05-29 | Betclic           | L   | 0.939      | -            | -                | -                | -         |    -7.53 | Banjo, duggy, paz, ScrunK, soulfly  |
|           65 |      466 | 2025-05-27 | Zero Tenacity     | W   | 0.926      | 0.435        | -                | 0.839 (0.338)    | 0 (0.000) |    17.79 | Banjo, duggy, paz, ScrunK, soulfly  |
|           64 |      494 | 2025-05-25 | Monte             | W   | 0.913      | 0.435        | -                | 0.651 (0.258)    | 0 (0.000) |    15.53 | Banjo, duggy, paz, ScrunK, soulfly  |
|           63 |      536 | 2025-05-22 | CYBERSHOKE        | L   | 0.894      | -            | -                | -                | -         |   -10.10 | Banjo, duggy, paz, ScrunK, soulfly  |
|           62 |      545 | 2025-05-22 | ex-SABRE          | W   | 0.893      | 0.435        | -                | 0.455 (0.177)    | 0 (0.000) |    12.21 | Banjo, duggy, paz, ScrunK, soulfly  |
|           61 |      568 | 2025-05-21 | Illuminar         | W   | 0.886      | -            | -                | -                | 0 (0.000) |     4.83 | Banjo, duggy, paz, ScrunK, soulfly  |
|           60 |      606 | 2025-05-20 | Sashi             | L   | 0.878      | -            | -                | -                | -         |    -9.13 | Banjo, duggy, paz, ScrunK, soulfly  |
|           59 |      663 | 2025-05-17 | TPuDCATb TPu      | L   | 0.858      | -            | -                | -                | -         |   -11.01 | Banjo, duggy, paz, ScrunK, soulfly  |
|           58 |      675 | 2025-05-16 | Monte             | W   | 0.853      | 0.435        | -                | 0.651 (0.241)    | 0 (0.000) |    15.49 | Banjo, duggy, paz, ScrunK, soulfly  |
|           57 |      732 | 2025-05-14 | Astrum            | L   | 0.838      | -            | -                | -                | -         |    -7.09 | Banjo, duggy, paz, ScrunK, soulfly  |
|           56 |      783 | 2025-05-12 | Zero Tenacity     | W   | 0.827      | 0.435        | -                | 0.839 (0.302)    | 0 (0.000) |    16.06 | Banjo, duggy, paz, ScrunK, soulfly  |
|           55 |      800 | 2025-05-12 | Nexus             | L   | 0.824      | -            | -                | -                | -         |    -8.59 | Banjo, duggy, paz, ScrunK, soulfly  |
|           54 |      848 | 2025-05-10 | ECLOT             | W   | 0.812      | 0.435        | 0.095 (0.034)    | 0.876 (0.309)    | 0 (0.000) |    17.22 | Banjo, duggy, Maze, paz, soulfly    |
|           53 |      876 | 2025-05-09 | Zero Tenacity     | L   | 0.804      | -            | -                | -                | -         |    -8.88 | Banjo, duggy, Maze, paz, soulfly    |
|           52 |      889 | 2025-05-08 | Passion UA        | L   | 0.800      | -            | -                | -                | -         |    -2.48 | Banjo, duggy, Maze, paz, soulfly    |
|           51 |      914 | 2025-05-07 | ECSTATIC          | L   | 0.794      | -            | -                | -                | -         |    -2.07 | Banjo, duggy, Maze, paz, soulfly    |
|           50 |      935 | 2025-05-07 | UNiTY             | W   | 0.791      | -            | -                | -                | 0 (0.000) |     9.00 | Banjo, duggy, Maze, paz, soulfly    |
|           49 |      983 | 2025-05-05 | FAVBET            | L   | 0.780      | -            | -                | -                | -         |   -10.01 | Banjo, duggy, Maze, paz, soulfly    |
|           48 |     1043 | 2025-05-03 | RUBY              | L   | 0.765      | -            | -                | -                | -         |   -10.81 | Banjo, duggy, Maze, paz, soulfly    |
|           47 |     1072 | 2025-05-01 | JANO              | W   | 0.753      | -            | -                | -                | 0 (0.000) |     8.43 | Banjo, duggy, Maze, paz, soulfly    |
|           46 |     1077 | 2025-05-01 | Monte             | L   | 0.752      | -            | -                | -                | -         |   -10.90 | Banjo, duggy, Maze, paz, soulfly    |
|           45 |     1141 | 2025-04-29 | Sangal            | L   | 0.738      | -            | -                | -                | -         |   -13.26 | Banjo, cacan, duggy, paz, soulfly   |
|           44 |     1171 | 2025-04-27 | Passion UA        | L   | 0.725      | -            | -                | -                | -         |    -2.30 | Banjo, duggy, paz, ScrunK, soulfly  |
|           43 |     1268 | 2025-04-22 | NOVAQ             | W   | 0.692      | -            | -                | -                | -         |     4.82 | Banjo, duggy, paz, ScrunK, soulfly  |
|           42 |     1283 | 2025-04-21 | Monte             | W   | 0.685      | 0.435        | -                | 0.651 (0.194)    | -         |    10.57 | Banjo, duggy, paz, ScrunK, soulfly  |
|           41 |     1309 | 2025-04-19 | PARIVISION        | L   | 0.673      | -            | -                | -                | -         |    -4.74 | Banjo, duggy, paz, ScrunK, soulfly  |
|           40 |     1392 | 2025-04-16 | LA MASIA          | W   | 0.652      | -            | -                | -                | -         |     5.49 | Banjo, duggy, paz, ScrunK, soulfly  |
|           39 |     1474 | 2025-04-12 | Sangal            | L   | 0.624      | -            | -                | -                | -         |   -11.39 | Banjo, duggy, paz, ScrunK, soulfly  |
|           38 |     1812 | 2025-04-01 | Monte             | L   | 0.554      | -            | -                | -                | -         |   -10.05 | Banjo, paz, S3NSEY, ScrunK, soulfly |
|           37 |     1904 | 2025-03-29 | AMKAL             | L   | 0.534      | -            | -                | -                | -         |   -11.12 | Banjo, paz, S3NSEY, ScrunK, soulfly |
|           36 |     1918 | 2025-03-29 | Passion UA        | W   | 0.533      | 0.143        | 0.095 (0.007)    | -                | -         |    15.39 | Banjo, paz, S3NSEY, ScrunK, soulfly |
|           35 |     1928 | 2025-03-29 | OG                | L   | 0.532      | -            | -                | -                | -         |    -3.65 | Banjo, paz, S3NSEY, ScrunK, soulfly |
|           34 |     1971 | 2025-03-28 | fnatic            | L   | 0.527      | -            | -                | -                | -         |    -1.38 | Banjo, paz, S3NSEY, ScrunK, soulfly |
|           33 |     2035 | 2025-03-27 | Nexus             | W   | 0.521      | 0.143        | 0.087 (0.006)    | -                | -         |    10.46 | Banjo, paz, S3NSEY, ScrunK, soulfly |
|           32 |     2071 | 2025-03-27 | Metizport         | L   | 0.518      | -            | -                | -                | -         |    -7.01 | Banjo, paz, S3NSEY, ScrunK, soulfly |
|           31 |     2199 | 2025-03-23 | inputprayers      | L   | 0.492      | -            | -                | -                | -         |   -13.51 | Banjo, paz, S3NSEY, ScrunK, soulfly |
|           30 |     2218 | 2025-03-22 | Alliance          | W   | 0.486      | 0.396        | 0.047 (0.009)    | -                | -         |    10.92 | Banjo, paz, S3NSEY, ScrunK, soulfly |
|           29 |     2267 | 2025-03-20 | OG                | L   | 0.472      | -            | -                | -                | -         |    -2.95 | Banjo, paz, S3NSEY, ScrunK, soulfly |
|           28 |     2304 | 2025-03-19 | TPuDCATb TPu      | L   | 0.467      | -            | -                | -                | -         |    -8.05 | Banjo, paz, S3NSEY, ScrunK, soulfly |
|           27 |     2359 | 2025-03-18 | 9INE              | L   | 0.459      | -            | -                | -                | -         |    -2.07 | Banjo, paz, S3NSEY, ScrunK, soulfly |
|           26 |     2394 | 2025-03-16 | 9INE              | L   | 0.446      | -            | -                | -                | -         |    -2.05 | Banjo, paz, S3NSEY, ScrunK, soulfly |
|           25 |     2442 | 2025-03-14 | FAVBET            | W   | 0.433      | -            | -                | -                | -         |     7.04 | Banjo, paz, S3NSEY, ScrunK, soulfly |
|           24 |     2475 | 2025-03-12 | ECSTATIC          | W   | 0.420      | 0.396        | 0.129 (0.021)    | 1.000 (0.167)    | -         |    12.28 | Banjo, paz, S3NSEY, ScrunK, soulfly |
|           23 |     2579 | 2025-03-09 | Astrum            | W   | 0.400      | 0.354        | 0.044 (0.006)    | 0.927 (0.131)    | -         |     8.08 | Banjo, paz, S3NSEY, ScrunK, soulfly |
|           22 |     2886 | 2025-03-02 | BC.Game           | L   | 0.353      | -            | -                | -                | -         |    -4.63 | Banjo, paz, S3NSEY, ScrunK, soulfly |
|           21 |     2932 | 2025-02-28 | SINNERS           | L   | 0.340      | -            | -                | -                | -         |    -3.82 | Banjo, paz, S3NSEY, ScrunK, soulfly |
|           20 |     2935 | 2025-02-28 | Iberian Soul      | L   | 0.339      | -            | -                | -                | -         |    -2.95 | Banjo, paz, S3NSEY, ScrunK, soulfly |
|           19 |     2955 | 2025-02-27 | GUN5              | L   | 0.333      | -            | -                | -                | -         |    -3.48 | Banjo, paz, S3NSEY, ScrunK, soulfly |
|           18 |     3036 | 2025-02-25 | 500               | W   | 0.321      | 0.500        | 0.036 (0.006)    | -                | -         |     5.61 | Banjo, paz, S3NSEY, ScrunK, soulfly |
|           17 |     3046 | 2025-02-25 | WildLotus         | W   | 0.319      | -            | -                | -                | -         |     2.02 | Banjo, paz, S3NSEY, ScrunK, soulfly |
|           16 |     3071 | 2025-02-24 | Iberian Soul      | L   | 0.313      | -            | -                | -                | -         |    -2.73 | Banjo, paz, S3NSEY, ScrunK, soulfly |
|           15 |     3075 | 2025-02-24 | Ninjas in Pyjamas | W   | 0.313      | 0.143        | 0.153 (0.007)    | -                | -         |     9.43 | Banjo, paz, S3NSEY, ScrunK, soulfly |
|           14 |     3124 | 2025-02-22 | ESC               | W   | 0.301      | -            | -                | -                | -         |     1.35 | Banjo, paz, S3NSEY, ScrunK, soulfly |
|           13 |     3139 | 2025-02-21 | TPuDCATb TPu      | W   | 0.294      | -            | -                | -                | -         |     4.38 | Banjo, paz, S3NSEY, ScrunK, soulfly |
|           12 |     3234 | 2025-02-18 | Nemiga            | L   | 0.274      | -            | -                | -                | -         |    -0.88 | Banjo, paz, S3NSEY, ScrunK, soulfly |
|           11 |     3373 | 2025-02-13 | Nexus             | L   | 0.239      | -            | -                | -                | -         |    -2.44 | Banjo, paz, S3NSEY, ScrunK, soulfly |
|           10 |     3483 | 2025-02-09 | SINNERS           | W   | 0.214      | -            | -                | -                | -         |     4.64 | Banjo, paz, S3NSEY, ScrunK, soulfly |
|            9 |     3581 | 2025-02-07 | NAVI Junior       | W   | 0.200      | 0.435        | 0.346 (0.030)    | -                | -         |     5.14 | Banjo, paz, S3NSEY, ScrunK, soulfly |
|            8 |     3607 | 2025-02-06 | Portuguese Family | L   | 0.193      | -            | -                | -                | -         |    -4.91 | Banjo, paz, S3NSEY, ScrunK, soulfly |
|            7 |     3657 | 2025-02-04 | B8                | L   | 0.181      | -            | -                | -                | -         |    -0.29 | Banjo, paz, S3NSEY, ScrunK, soulfly |
|            6 |     3687 | 2025-02-02 | 9INE              | W   | 0.167      | -            | -                | -                | -         |     4.64 | Banjo, paz, S3NSEY, ScrunK, soulfly |
|            5 |     3721 | 2025-01-29 | Ninjas in Pyjamas | W   | 0.141      | -            | -                | -                | -         |     4.32 | Banjo, paz, S3NSEY, ScrunK, soulfly |
|            4 |     3784 | 2025-01-27 | Betera            | L   | 0.128      | -            | -                | -                | -         |    -2.27 | Banjo, paz, S3NSEY, ScrunK, soulfly |
|            3 |     3831 | 2025-01-24 | Betclic           | W   | 0.108      | -            | -                | -                | -         |     2.41 | Banjo, paz, S3NSEY, ScrunK, soulfly |
|            2 |     3837 | 2025-01-24 | Sashi             | W   | 0.106      | -            | -                | -                | -         |     2.63 | Banjo, paz, S3NSEY, ScrunK, soulfly |
|            1 |     3867 | 2025-01-23 | CYBERSHOKE        | W   | 0.101      | -            | -                | -                | -         |     1.96 | Banjo, paz, S3NSEY, ScrunK, soulfly |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,642.07)
- Divide that value by the 5th highest value among all rosters ($499,535.85)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-05-11 |      0.821 | $2,000.00      | $1,642.07       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
