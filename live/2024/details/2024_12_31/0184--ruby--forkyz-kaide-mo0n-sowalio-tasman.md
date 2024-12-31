### Roster Details<br />
Team Name: RUBY<br />
Roster: forkyz, Kaide, mo0N, sowalio, tasman<br />
Global Rank: [184](../../standings_global_2024_12_31.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_12_31.md)<br />
Regional Rank: [117]( ../../standings_europe_2024_12_31.md)<br />
<br />
Final Rank Value:  644.5<br />
<br />
Final Rank Value (644.5) = Starting Rank Value (576.6) + Head To Head Adjustments (67.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.318[<sup>2</sup>](#table1)
- Opponent Network: 0.045[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.091<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 576.6
- 400 + ( ( 0.091 - 0.000 ) / ( 0.821 - 0.000 ) ) * 1600 = 576.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           26 |     1670 | 2024-10-04 | HOTU             | L   | 0.625      | -            | -                | -                | -         |    -6.07 | forkyz, Kaide, mo0N, sowalio, tasman   |
|           25 |     1735 | 2024-10-02 | ECSTATIC         | L   | 0.613      | -            | -                | -                | -         |    -2.39 | forkyz, Kaide, mo0N, sowalio, tasman   |
|           24 |     1786 | 2024-10-01 | Passion UA       | L   | 0.606      | -            | -                | -                | -         |    -1.23 | forkyz, Kaide, mo0N, sowalio, tasman   |
|           23 |     1843 | 2024-09-29 | FLuffy Gangsters | W   | 0.591      | 0.143        | 0.013 (0.001)    | 0.563 (0.048)    | 0 (0.000) |    11.96 | forkyz, Kaide, mo0N, sowalio, tasman   |
|           22 |     2014 | 2024-09-25 | ENCE Academy     | W   | 0.566      | 0.143        | 0.013 (0.001)    | 0.292 (0.024)    | 0 (0.000) |    11.72 | forkyz, Kaide, mo0N, sowalio, tasman   |
|           21 |     2064 | 2024-09-24 | Daystar          | W   | 0.560      | 0.143        | -                | 0.078 (0.006)    | 0 (0.000) |    11.28 | forkyz, Kaide, mo0N, sowalio, tasman   |
|           20 |     2125 | 2024-09-22 | Rhyno            | L   | 0.547      | -            | -                | -                | -         |    -5.38 | forkyz, Kaide, mo0N, sowalio, tasman   |
|           19 |     2171 | 2024-09-20 | CPH Wolves       | W   | 0.534      | 0.143        | 0.011 (0.001)    | 0.545 (0.042)    | 0 (0.000) |    13.63 | forkyz, Kaide, mo0N, sowalio, tasman   |
|           18 |     2207 | 2024-09-19 | FLuffy Gangsters | W   | 0.527      | 0.143        | 0.013 (0.001)    | 0.563 (0.042)    | 0 (0.000) |    11.74 | forkyz, Kaide, mo0N, sowalio, tasman   |
|           17 |     2392 | 2024-09-13 | DMS              | L   | 0.486      | -            | -                | -                | -         |    -5.29 | Chill, Kaide, mo0N, Something, sowalio |
|           16 |     2440 | 2024-09-12 | ENCE Academy     | W   | 0.477      | 0.143        | 0.013 (0.001)    | 0.292 (0.020)    | 0 (0.000) |    11.01 | Chill, Kaide, mo0N, Something, sowalio |
|           15 |     2467 | 2024-09-11 | DMS              | L   | 0.472      | -            | -                | -                | -         |    -5.22 | Chill, Kaide, mo0N, Something, sowalio |
|           14 |     2619 | 2024-09-05 | ECLOT            | L   | 0.433      | -            | -                | -                | -         |    -0.26 | Chill, Kaide, mo0N, Something, sowalio |
|           13 |     2660 | 2024-09-04 | Spirit Academy   | L   | 0.426      | -            | -                | -                | -         |    -1.25 | Chill, Kaide, mo0N, Something, sowalio |
|           12 |     2701 | 2024-09-03 | BC.Game          | W   | 0.418      | 0.372        | 0.045 (0.007)    | 0.412 (0.064)    | 0 (0.000) |    11.08 | Chill, Kaide, mo0N, Something, sowalio |
|           11 |     3157 | 2024-08-21 | los kogutos      | L   | 0.333      | -            | -                | -                | -         |    -0.43 | Chill, Kaide, mo0N, Something, sowalio |
|           10 |     3232 | 2024-08-20 | Young Ninjas     | L   | 0.326      | -            | -                | -                | -         |    -2.94 | Chill, Kaide, mo0N, Something, sowalio |
|            9 |     3307 | 2024-08-17 | Nexus            | W   | 0.306      | 0.435        | 0.350 (0.047)    | 0.807 (0.107)    | 0 (0.000) |     9.57 | Chill, Kaide, mo0N, Something, sowalio |
|            8 |     3327 | 2024-08-16 | Endpoint         | L   | 0.300      | -            | -                | -                | -         |    -1.50 | Chill, Kaide, mo0N, Something, sowalio |
|            7 |     3391 | 2024-08-14 | Insilio          | W   | 0.285      | 0.435        | 0.017 (0.002)    | 0.370 (0.046)    | 0 (0.000) |     7.12 | Chill, Kaide, mo0N, Something, sowalio |
|            6 |     3731 | 2024-08-04 | Project G        | L   | 0.218      | -            | -                | -                | -         |    -5.03 | dekz, fostar, Kaide, mo0N, sowalio     |
|            5 |     4073 | 2024-07-25 | 9z               | L   | 0.153      | -            | -                | -                | -         |    -0.41 | dekz, fostar, Kaide, mo0N, sowalio     |
|            4 |     4154 | 2024-07-23 | Metizport        | W   | 0.138      | 0.435        | 0.158 (0.009)    | 0.845 (0.051)    | 0 (0.000) |     4.30 | dekz, fostar, Kaide, mo0N, sowalio     |
|            3 |     4248 | 2024-07-20 | Passion UA       | L   | 0.118      | -            | -                | -                | -         |    -0.10 | dekz, fostar, Kaide, mo0N, sowalio     |
|            2 |     4406 | 2024-07-17 | FORZE Reload     | W   | 0.098      | 0.435        | 0.025 (0.001)    | -                | -         |     2.16 | dekz, fostar, Kaide, mo0N, sowalio     |
|            1 |     4450 | 2024-07-16 | Sampi            | L   | 0.093      | -            | -                | -                | -         |    -0.23 | dekz, fostar, Kaide, mo0N, sowalio     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($298,653.52)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
