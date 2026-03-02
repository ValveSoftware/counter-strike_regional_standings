### Roster Details<br />
Team Name: Aether<br />
Roster: Andrew, brett, s3rum, Seb, xaler<br />
Global Rank: [233](../../standings_global_2026_03_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_03_02.md)<br />
Regional Rank: [53]( ../../standings_americas_2026_03_02.md)<br />
<br />
Final Rank Value:  634.1<br />
<br />
Final Rank Value (634.1) = Starting Rank Value (587.3) + Head To Head Adjustments (46.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.271[<sup>2</sup>](#table1)
- Opponent Network: 0.043[<sup>2</sup>](#table1)
- LAN Wins: 0.083[<sup>2</sup>](#table1)

The average of these factors is 0.099<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 587.3
- 400 + ( ( 0.099 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 587.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           17 |       24 | 2026-02-28 | LAG          | L   | 1.000      | -            | -                | -                | -         |    -6.91 | Andrew, brett, s3rum, Seb, xaler     |
|           16 |       57 | 2026-02-27 | Sakura       | W   | 1.000      | 0.143        | 0.047 (0.007)    | 0.094 (0.013)    | 0 (0.000) |    16.11 | Andrew, brett, s3rum, Seb, xaler     |
|           15 |      103 | 2026-02-26 | BOSS         | L   | 1.000      | -            | -                | -                | -         |    -9.43 | Andrew, brett, s3rum, Seb, xaler     |
|           14 |      458 | 2026-02-18 | LAG          | L   | 1.000      | -            | -                | -                | -         |    -7.24 | Andrew, brett, s3rum, Seb, xaler     |
|           13 |      510 | 2026-02-17 | smokepoint   | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     6.47 | Andrew, brett, s3rum, Seb, xaler     |
|           12 |      783 | 2026-02-12 | FarmVille    | W   | 1.000      | 0.333        | 0.009 (0.003)    | 0.229 (0.076)    | 0 (0.000) |    19.71 | Andrew, brett, s3rum, Seb, xaler     |
|           11 |      859 | 2026-02-10 | Zomblers     | L   | 1.000      | -            | -                | -                | -         |   -10.56 | Andrew, brett, s3rum, Seb, xaler     |
|           10 |      951 | 2026-02-07 | OverKnight   | W   | 1.000      | 0.333        | 0.000 (0.000)    | 0.133 (0.044)    | 0 (0.000) |    16.63 | Andrew, brett, s3rum, Seb, xaler     |
|            9 |     1089 | 2026-02-02 | Outfit 49    | W   | 1.000      | 0.333        | 0.010 (0.003)    | 0.426 (0.142)    | 0 (0.000) |    18.90 | Andrew, brett, s3rum, Seb, xaler     |
|            8 |     1839 | 2026-01-03 | Voca         | L   | 0.815      | -            | -                | -                | -         |    -2.46 | Andrew, brett, LUKE4k, s3rum, sava9e |
|            7 |     1844 | 2026-01-03 | Dark Knight  | W   | 0.814      | 0.323        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.814) |     6.53 | Andrew, brett, LUKE4k, s3rum, sava9e |
|            6 |     1847 | 2026-01-03 | Voca         | L   | 0.813      | -            | -                | -                | -         |    -2.40 | Andrew, brett, LUKE4k, s3rum, sava9e |
|            5 |     2036 | 2025-12-11 | Pulse        | L   | 0.663      | -            | -                | -                | -         |   -11.97 | Andrew, brett, LUKE4k, s3rum, sava9e |
|            4 |     2046 | 2025-12-10 | Wanted Goons | W   | 0.656      | 0.333        | 0.000 (0.000)    | 0.044 (0.010)    | 0 (0.000) |     7.29 | Andrew, brett, LUKE4k, s3rum, sava9e |
|            3 |     2076 | 2025-12-08 | Rave         | L   | 0.643      | -            | -                | -                | -         |    -3.15 | Andrew, brett, LUKE4k, s3rum, sava9e |
|            2 |     2169 | 2025-12-04 | BOSS         | L   | 0.616      | -            | -                | -                | -         |    -4.59 | Andrew, brett, LUKE4k, s3rum, sava9e |
|            1 |     2208 | 2025-12-02 | LAG          | W   | 0.603      | 0.333        | 0.035 (0.007)    | 0.703 (0.141)    | 0 (0.000) |    13.88 | Andrew, brett, LUKE4k, s3rum, sava9e |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($334,320.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
