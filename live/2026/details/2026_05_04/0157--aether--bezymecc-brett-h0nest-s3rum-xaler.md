### Roster Details<br />
Team Name: Aether<br />
Roster: bezymecc, brett, H0NeST, s3rum, xaler<br />
Global Rank: [157](../../standings_global_2026_05_04.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_05_04.md)<br />
Regional Rank: [35]( ../../standings_americas_2026_05_04.md)<br />
<br />
Final Rank Value:  851.6<br />
<br />
Final Rank Value (851.6) = Starting Rank Value (774.5) + Head To Head Adjustments (77.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.333[<sup>1</sup>](#table2)
- Bounty Collected: 0.319[<sup>2</sup>](#table1)
- Opponent Network: 0.155[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.202<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 774.5
- 400 + ( ( 0.202 - 0.000 ) / ( 0.862 - 0.000 ) ) * 1600 = 774.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           32 |        5 | 2026-05-03 | Wildcard       | L   | 1.000      | -            | -                | -                | -         |    -1.33 | bezymecc, brett, H0NeST, s3rum, xaler |
|           31 |       83 | 2026-04-30 | BOSS           | W   | 1.000      | 0.354        | 0.006 (0.002)    | 0.375 (0.133)    | 0 (0.000) |    18.22 | bezymecc, brett, H0NeST, s3rum, xaler |
|           30 |      151 | 2026-04-28 | Fisher College | L   | 1.000      | -            | -                | -                | -         |    -5.64 | bezymecc, brett, H0NeST, s3rum, xaler |
|           29 |      156 | 2026-04-28 | FarmVille      | W   | 1.000      | 0.354        | 0.011 (0.004)    | 0.415 (0.147)    | 0 (0.000) |    13.74 | bezymecc, brett, H0NeST, s3rum, xaler |
|           28 |      181 | 2026-04-27 | Wildcard       | L   | 1.000      | -            | -                | -                | -         |    -1.25 | Andrew, brett, H0NeST, Seb, xaler     |
|           27 |      188 | 2026-04-27 | Shimmer        | W   | 1.000      | 0.354        | 0.010 (0.003)    | -                | 0 (0.000) |     6.00 | bezymecc, brett, H0NeST, s3rum, xaler |
|           26 |      226 | 2026-04-26 | EMPIRE         | W   | 1.000      | 0.363        | -                | 0.257 (0.093)    | 0 (0.000) |    13.59 | bezymecc, brett, H0NeST, s3rum, xaler |
|           25 |      565 | 2026-04-14 | insane players | L   | 1.000      | -            | -                | -                | -         |   -17.16 | Andrew, brett, H0NeST, Seb, xaler     |
|           24 |      587 | 2026-04-13 | Marsborne      | L   | 1.000      | -            | -                | -                | -         |    -4.18 | Andrew, brett, H0NeST, Seb, xaler     |
|           23 |      602 | 2026-04-12 | EMPIRE         | L   | 1.000      | -            | -                | -                | -         |   -17.77 | Andrew, brett, H0NeST, Seb, xaler     |
|           22 |      628 | 2026-04-11 | LAG            | W   | 1.000      | 0.333        | 0.056 (0.019)    | 0.792 (0.264)    | 0 (0.000) |    20.42 | Andrew, brett, H0NeST, Seb, xaler     |
|           21 |      681 | 2026-04-09 | BOSS           | L   | 1.000      | -            | -                | -                | -         |   -11.37 | Andrew, brett, H0NeST, Seb, xaler     |
|           20 |      709 | 2026-04-08 | 900FPSvsECO    | W   | 1.000      | 0.333        | -                | 0.254 (0.085)    | 0 (0.000) |     9.09 | Andrew, brett, H0NeST, Seb, xaler     |
|           19 |      738 | 2026-04-07 | insane players | W   | 1.000      | 0.333        | 0.021 (0.007)    | 0.464 (0.155)    | 0 (0.000) |    12.61 | Andrew, brett, H0NeST, Seb, xaler     |
|           18 |      773 | 2026-04-06 | 900FPSvsECO    | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.81 | Andrew, brett, H0NeST, Seb, xaler     |
|           17 |      954 | 2026-04-03 | regain         | L   | 0.995      | -            | -                | -                | -         |   -17.65 | Andrew, brett, s3rum, Seb, xaler      |
|           16 |     1224 | 2026-03-31 | InControl      | W   | 0.976      | 0.333        | 0.021 (0.007)    | 0.449 (0.146)    | 0 (0.000) |    16.61 | Andrew, brett, s3rum, Seb, xaler      |
|           15 |     1590 | 2026-03-26 | Chicken Coop   | L   | 0.943      | -            | -                | -                | -         |   -13.72 | Andrew, brett, s3rum, Seb, xaler      |
|           14 |     1632 | 2026-03-25 | LAG            | W   | 0.936      | 0.363        | 0.056 (0.019)    | 0.792 (0.269)    | 0 (0.000) |    23.44 | Andrew, brett, s3rum, Seb, xaler      |
|           13 |     1683 | 2026-03-24 | 900FPSvsECO    | W   | 0.930      | 0.363        | 0.005 (0.002)    | 0.254 (0.086)    | -         |    12.89 | Andrew, brett, s3rum, Seb, xaler      |
|           12 |     1741 | 2026-03-23 | Chicken Coop   | L   | 0.923      | -            | -                | -                | -         |   -12.35 | Andrew, brett, s3rum, Seb, xaler      |
|           11 |     1865 | 2026-03-21 | Zomblers       | W   | 0.910      | 0.363        | 0.017 (0.006)    | 0.524 (0.173)    | -         |    14.80 | Andrew, brett, s3rum, Seb, xaler      |
|           10 |     1929 | 2026-03-20 | Reign Above    | W   | 0.903      | -            | -                | -                | -         |     7.06 | Andrew, brett, s3rum, Seb, xaler      |
|            9 |     2897 | 2026-02-28 | LAG            | L   | 0.769      | -            | -                | -                | -         |    -4.11 | Andrew, brett, s3rum, Seb, xaler      |
|            8 |     2941 | 2026-02-27 | Shimmer        | W   | 0.762      | 0.769        | 0.010 (0.006)    | -                | -         |     7.05 | Andrew, brett, s3rum, Seb, xaler      |
|            7 |     2994 | 2026-02-26 | BOSS           | L   | 0.756      | -            | -                | -                | -         |    -7.04 | Andrew, brett, s3rum, Seb, xaler      |
|            6 |     3417 | 2026-02-18 | LAG            | L   | 0.702      | -            | -                | -                | -         |    -3.93 | Andrew, brett, s3rum, Seb, xaler      |
|            5 |     3469 | 2026-02-17 | smokepoint     | W   | 0.697      | -            | -                | -                | -         |     2.30 | Andrew, brett, s3rum, Seb, xaler      |
|            4 |     3747 | 2026-02-12 | FarmVille      | W   | 0.663      | -            | -                | -                | -         |     7.00 | Andrew, brett, s3rum, Seb, xaler      |
|            3 |     3823 | 2026-02-10 | Zomblers       | L   | 0.649      | -            | -                | -                | -         |    -9.44 | Andrew, brett, s3rum, Seb, xaler      |
|            2 |     3915 | 2026-02-07 | OverKnight     | W   | 0.628      | -            | -                | -                | -         |     3.53 | Andrew, brett, s3rum, Seb, xaler      |
|            1 |     4056 | 2026-02-02 | Outfit 49      | W   | 0.596      | -            | -                | -                | -         |     5.88 | Andrew, brett, s3rum, Seb, xaler      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,649.34)
- Divide that value by the 5th highest value among all rosters ($468,528.41)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-05-03 |      1.000 | $1,750.00      | $1,750.00       |
| 2026-04-14 |      1.000 | $1,000.00      | $1,000.00       |
| 2026-03-27 |      0.950 | $2,000.00      | $1,899.34       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
