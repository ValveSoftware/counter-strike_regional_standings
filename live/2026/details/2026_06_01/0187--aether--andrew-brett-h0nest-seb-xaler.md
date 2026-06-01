### Roster Details<br />
Team Name: Aether<br />
Roster: Andrew, brett, H0NeST, Seb, xaler<br />
Global Rank: [187](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_06_01.md)<br />
Regional Rank: [42]( ../../standings_americas_2026_06_01.md)<br />
<br />
Final Rank Value:  776.5<br />
<br />
Final Rank Value (776.5) = Starting Rank Value (720.3) + Head To Head Adjustments (56.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.293[<sup>1</sup>](#table2)
- Bounty Collected: 0.286[<sup>2</sup>](#table1)
- Opponent Network: 0.094[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.168<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 720.3
- 400 + ( ( 0.168 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 720.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           26 |     1143 | 2026-04-27 | Wildcard       | L   | 0.969      | -            | -                | -                | -         |    -0.84 | Andrew, brett, H0NeST, Seb, xaler |
|           25 |     1551 | 2026-04-14 | insane players | L   | 0.883      | -            | -                | -                | -         |   -14.42 | Andrew, brett, H0NeST, Seb, xaler |
|           24 |     1573 | 2026-04-13 | Marsborne      | L   | 0.875      | -            | -                | -                | -         |    -4.34 | Andrew, brett, H0NeST, Seb, xaler |
|           23 |     1588 | 2026-04-12 | EMPIRE         | L   | 0.870      | -            | -                | -                | -         |   -14.85 | Andrew, brett, H0NeST, Seb, xaler |
|           22 |     1614 | 2026-04-11 | LAG            | W   | 0.863      | 0.333        | 0.033 (0.009)    | 0.681 (0.196)    | 0 (0.000) |    20.65 | Andrew, brett, H0NeST, Seb, xaler |
|           21 |     1667 | 2026-04-09 | BOSS           | L   | 0.849      | -            | -                | -                | -         |    -9.50 | Andrew, brett, H0NeST, Seb, xaler |
|           20 |     1695 | 2026-04-08 | 900FPSvsECO    | W   | 0.842      | 0.333        | 0.003 (0.001)    | 0.196 (0.055)    | 0 (0.000) |     8.51 | Andrew, brett, H0NeST, Seb, xaler |
|           19 |     1724 | 2026-04-07 | insane players | W   | 0.835      | 0.333        | 0.013 (0.004)    | 0.372 (0.104)    | 0 (0.000) |    11.84 | Andrew, brett, H0NeST, Seb, xaler |
|           18 |     1759 | 2026-04-06 | 900FPSvsECO    | W   | 0.829      | 0.333        | 0.003 (0.001)    | 0.196 (0.054)    | 0 (0.000) |     9.06 | Andrew, brett, H0NeST, Seb, xaler |
|           17 |     1940 | 2026-04-03 | regain         | L   | 0.809      | -            | -                | -                | -         |   -13.38 | Andrew, brett, s3rum, Seb, xaler  |
|           16 |     2210 | 2026-03-31 | Iowa Stormboar | W   | 0.789      | 0.333        | 0.013 (0.004)    | 0.366 (0.096)    | 0 (0.000) |    13.95 | Andrew, brett, s3rum, Seb, xaler  |
|           15 |     2576 | 2026-03-26 | Chicken Coop   | L   | 0.757      | -            | -                | -                | -         |    -5.64 | Andrew, brett, s3rum, Seb, xaler  |
|           14 |     2618 | 2026-03-25 | LAG            | W   | 0.750      | 0.363        | 0.033 (0.009)    | 0.681 (0.185)    | 0 (0.000) |    20.93 | Andrew, brett, s3rum, Seb, xaler  |
|           13 |     2669 | 2026-03-24 | 900FPSvsECO    | W   | 0.743      | 0.363        | 0.003 (0.001)    | 0.196 (0.053)    | 0 (0.000) |    10.75 | Andrew, brett, s3rum, Seb, xaler  |
|           12 |     2727 | 2026-03-23 | Chicken Coop   | L   | 0.737      | -            | -                | -                | -         |    -4.61 | Andrew, brett, s3rum, Seb, xaler  |
|           11 |     2851 | 2026-03-21 | Zomblers       | W   | 0.723      | 0.363        | 0.012 (0.003)    | 0.436 (0.114)    | 0 (0.000) |    12.37 | Andrew, brett, s3rum, Seb, xaler  |
|           10 |     2915 | 2026-03-20 | Reign Above    | W   | 0.716      | 0.363        | -                | 0.207 (0.054)    | 0 (0.000) |    10.15 | Andrew, brett, s3rum, Seb, xaler  |
|            9 |     3883 | 2026-02-28 | LAG            | L   | 0.582      | -            | -                | -                | -         |    -1.64 | Andrew, brett, s3rum, Seb, xaler  |
|            8 |     3927 | 2026-02-27 | Shimmer        | W   | 0.576      | 0.769        | -                | 0.057 (0.025)    | 0 (0.000) |     4.76 | Andrew, brett, s3rum, Seb, xaler  |
|            7 |     3980 | 2026-02-26 | BOSS           | L   | 0.569      | -            | -                | -                | -         |    -5.42 | Andrew, brett, s3rum, Seb, xaler  |
|            6 |     4403 | 2026-02-18 | LAG            | L   | 0.516      | -            | -                | -                | -         |    -1.42 | Andrew, brett, s3rum, Seb, xaler  |
|            5 |     4455 | 2026-02-17 | smokepoint     | W   | 0.510      | -            | -                | -                | -         |     2.20 | Andrew, brett, s3rum, Seb, xaler  |
|            4 |     4733 | 2026-02-12 | FarmVille      | W   | 0.476      | 0.333        | 0.003 (0.000)    | -                | -         |     5.58 | Andrew, brett, s3rum, Seb, xaler  |
|            3 |     4809 | 2026-02-10 | Zomblers       | L   | 0.463      | -            | -                | -                | -         |    -6.25 | Andrew, brett, s3rum, Seb, xaler  |
|            2 |     4901 | 2026-02-07 | OverKnight     | W   | 0.442      | -            | -                | -                | -         |     3.09 | Andrew, brett, s3rum, Seb, xaler  |
|            1 |     5042 | 2026-02-02 | Outfit 49      | W   | 0.410      | 0.333        | 0.002 (0.000)    | -                | -         |     4.72 | Andrew, brett, s3rum, Seb, xaler  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,408.79)
- Divide that value by the 5th highest value among all rosters ($624,406.38)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-04-14 |      0.883 | $1,000.00      | $882.59         |
| 2026-03-27 |      0.763 | $2,000.00      | $1,526.20       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
