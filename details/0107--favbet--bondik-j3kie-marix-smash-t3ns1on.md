### Roster Details<br />
Team Name: FAVBET<br />
Roster: bondik, j3kie, Marix, Smash, t3ns1on<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [107](../standings_global.md)<br />
Regional Rank: [78]( ../standings_europe.md)<br />
Final Rank Value:  861.2<br />
<br />
Final Rank Value (861.2) = Starting Rank Value (766.5) + Head To Head Adjustments (94.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.299[<sup>1</sup>](#table2)
- Bounty Collected: 0.349[<sup>2</sup>](#table1)
- Opponent Network: 0.076[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.181<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 766.5
- 400 + ( ( 0.181 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 766.5


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
|           26 |       46 | 2024-07-23 | Rhyno             | L   | 1.000      | -            | -                | -                | -         |    -9.64 | bondik, j3kie, Marix, Smash, t3ns1on    |
|           25 |      348 | 2024-07-16 | ECLOT             | W   | 1.000      | 0.143        | 0.084 (0.012)    | 0.510 (0.073)    | 0 (0.000) |    24.00 | bondik, j3kie, Marix, Smash, t3ns1on    |
|           24 |      604 | 2024-06-16 | Zero Tenacity     | L   | 0.947      | -            | -                | -                | -         |    -6.58 | bondik, guthriee, j3kie, Smash, t3ns1on |
|           23 |      634 | 2024-06-15 | 9INE              | W   | 0.940      | -            | -                | -                | 0 (0.000) |     4.83 | bondik, guthriee, j3kie, Smash, t3ns1on |
|           22 |      670 | 2024-06-14 | ARCRED            | L   | 0.934      | -            | -                | -                | -         |   -11.60 | bondik, guthriee, j3kie, Smash, t3ns1on |
|           21 |      739 | 2024-06-12 | Nemiga            | W   | 0.920      | 0.143        | 0.415 (0.055)    | 0.707 (0.093)    | 0 (0.000) |    25.09 | bondik, guthriee, j3kie, Smash, t3ns1on |
|           20 |      763 | 2024-06-11 | Nexus             | W   | 0.913      | 0.143        | 0.018 (0.002)    | 0.480 (0.063)    | 0 (0.000) |    11.12 | bondik, guthriee, j3kie, Smash, t3ns1on |
|           19 |     1000 | 2024-06-06 | Zero Tenacity     | L   | 0.881      | -            | -                | -                | -         |    -4.51 | bondik, guthriee, j3kie, Smash, t3ns1on |
|           18 |     1027 | 2024-06-06 | 1WIN              | W   | 0.879      | 0.372        | 0.035 (0.011)    | 0.542 (0.178)    | 0 (0.000) |    20.27 | bondik, guthriee, j3kie, Smash, t3ns1on |
|           17 |     1132 | 2024-06-04 | RUSTEC            | W   | 0.866      | -            | -                | -                | 0 (0.000) |     2.73 | bondik, guthriee, j3kie, Smash, t3ns1on |
|           16 |     1182 | 2024-06-02 | JANO              | W   | 0.852      | 0.372        | 0.002 (0.001)    | 0.055 (0.017)    | 0 (0.000) |     9.20 | bondik, guthriee, j3kie, Smash, t3ns1on |
|           15 |     1243 | 2024-05-31 | Sangal            | L   | 0.839      | -            | -                | -                | -         |    -4.12 | bondik, guthriee, j3kie, Smash, t3ns1on |
|           14 |     1249 | 2024-05-31 | SAW               | L   | 0.838      | -            | -                | -                | -         |    -2.23 | bondik, guthriee, j3kie, Smash, t3ns1on |
|           13 |     1262 | 2024-05-30 | ARCRED            | L   | 0.834      | -            | -                | -                | -         |   -10.81 | bondik, guthriee, j3kie, Smash, t3ns1on |
|           12 |     1292 | 2024-05-29 | Aurora Young Blud | W   | 0.826      | 0.372        | 0.004 (0.001)    | 0.411 (0.126)    | 0 (0.000) |    11.81 | bondik, guthriee, j3kie, Smash, t3ns1on |
|           11 |     1861 | 2024-05-10 | Johnny Speeds     | L   | 0.698      | -            | -                | -                | -         |    -1.19 | bondik, guthriee, j3kie, Smash, t3ns1on |
|           10 |     2811 | 2024-04-03 | Metizport         | L   | 0.453      | -            | -                | -                | -         |    -4.33 | bondik, guthriee, j3kie, Smash, t3ns1on |
|            9 |     2844 | 2024-04-02 | Ninjas in Pyjamas | L   | 0.447      | -            | -                | -                | -         |    -0.09 | bondik, guthriee, j3kie, Smash, t3ns1on |
|            8 |     2848 | 2024-04-02 | GamerLegion       | W   | 0.446      | 0.143        | 0.205 (0.013)    | 0.309 (0.020)    | 0 (0.000) |    12.56 | bondik, guthriee, j3kie, Smash, t3ns1on |
|            7 |     2875 | 2024-03-31 | Passion UA        | W   | 0.433      | 0.276        | 0.163 (0.019)    | 1.000 (0.119)    | 0 (0.000) |    10.90 | bondik, guthriee, j3kie, Smash, t3ns1on |
|            6 |     2880 | 2024-03-30 | L&G               | W   | 0.426      | -            | -                | -                | -         |     2.46 | bondik, guthriee, j3kie, Smash, t3ns1on |
|            5 |     2936 | 2024-03-27 | ALTERNATE aTTaX   | W   | 0.407      | 0.143        | 0.041 (0.002)    | 0.638 (0.037)    | -         |    10.03 | bondik, guthriee, j3kie, Smash, t3ns1on |
|            4 |     2946 | 2024-03-27 | BetBoom           | W   | 0.407      | 0.143        | 0.333 (0.019)    | 0.642 (0.037)    | -         |    12.59 | bondik, guthriee, j3kie, Smash, t3ns1on |
|            3 |     3281 | 2024-03-10 | AURA              | L   | 0.294      | -            | -                | -                | -         |    -7.52 | bondik, guthriee, j3kie, Smash, t3ns1on |
|            2 |     3327 | 2024-03-08 | Nexus             | L   | 0.280      | -            | -                | -                | -         |    -3.46 | bondik, guthriee, j3kie, Smash, t3ns1on |
|            1 |     3383 | 2024-03-06 | CYBERSHOKE        | W   | 0.267      | -            | -                | -                | -         |     3.14 | bondik, guthriee, j3kie, Smash, t3ns1on |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,249.45)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-10 |      0.907 | $750.00        | $680.57         |
| 2024-03-31 |      0.433 | $1,315.00      | $568.88         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
