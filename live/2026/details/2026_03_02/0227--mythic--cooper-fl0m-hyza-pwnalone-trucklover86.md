### Roster Details<br />
Team Name: Mythic<br />
Roster: Cooper, fl0m, hyza, PwnAlone, Trucklover86<br />
Global Rank: [227](../../standings_global_2026_03_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_03_02.md)<br />
Regional Rank: [52]( ../../standings_americas_2026_03_02.md)<br />
<br />
Final Rank Value:  643.8<br />
<br />
Final Rank Value (643.8) = Starting Rank Value (662.7) + Head To Head Adjustments (-18.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.261[<sup>1</sup>](#table2)
- Bounty Collected: 0.276[<sup>2</sup>](#table1)
- Opponent Network: 0.018[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.139<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 662.7
- 400 + ( ( 0.139 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 662.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           20 |      411 | 2026-02-19 | Outfit 49       | L   | 1.000      | -            | -                | -                | -         |   -13.03 | Cooper, fl0m, hyza, PwnAlone, Trucklover86      |
|           19 |      455 | 2026-02-18 | Voca            | L   | 1.000      | -            | -                | -                | -         |    -3.85 | Cooper, fl0m, hyza, PwnAlone, Trucklover86      |
|           18 |      514 | 2026-02-17 | Sakura          | W   | 1.000      | 0.363        | 0.047 (0.017)    | 0.094 (0.034)    | 0 (0.000) |    16.82 | Cooper, fl0m, hyza, PwnAlone, Trucklover86      |
|           17 |     1015 | 2026-02-05 | mouse           | L   | 1.000      | -            | -                | -                | -         |   -22.39 | Cooper, fl0m, hyza, PwnAlone, Trucklover86      |
|           16 |     1099 | 2026-02-02 | SportsBetExpert | L   | 1.000      | -            | -                | -                | -         |   -14.40 | Cooper, fl0m, hyza, PwnAlone, Trucklover86      |
|           15 |     2743 | 2025-11-11 | Marsborne       | L   | 0.463      | -            | -                | -                | -         |    -0.90 | Cooper, fl0m, hyza, PwnAlone, Trucklover86      |
|           14 |     2768 | 2025-11-10 | Zomblers        | W   | 0.456      | 0.363        | 0.004 (0.001)    | 0.331 (0.055)    | 0 (0.000) |     7.77 | Cooper, fl0m, hyza, PwnAlone, Trucklover86      |
|           13 |     3254 | 2025-10-27 | TSG             | W   | 0.363      | 0.363        | 0.000 (0.000)    | 0.067 (0.009)    | 0 (0.000) |     3.55 | Cooper, fl0m, hyza, PwnAlone, Trucklover86      |
|           12 |     3294 | 2025-10-26 | LAG             | L   | 0.356      | -            | -                | -                | -         |    -3.85 | Cooper, fl0m, hyza, PwnAlone, Trucklover86      |
|           11 |     3403 | 2025-10-24 | BOSS            | W   | 0.343      | 0.363        | 0.017 (0.002)    | 0.457 (0.057)    | 0 (0.000) |     7.27 | Cooper, fl0m, hyza, PwnAlone, Trucklover86      |
|           10 |     3474 | 2025-10-23 | Chicken Coop    | W   | 0.335      | 0.363        | 0.000 (0.000)    | 0.137 (0.017)    | 0 (0.000) |     3.33 | Austin, Cooper, fl0m, hyza, Trucklover86        |
|            9 |     3832 | 2025-10-09 | regain          | L   | 0.243      | -            | -                | -                | -         |    -3.47 | Austin, Cooper, fl0m, hyza, Trucklover86        |
|            8 |     3880 | 2025-10-08 | Sakura          | W   | 0.236      | 0.363        | 0.047 (0.004)    | 0.094 (0.008)    | 0 (0.000) |     5.12 | Austin, Cooper, fl0m, hyza, Trucklover86        |
|            7 |     3937 | 2025-10-07 | Wanted Goons    | W   | 0.229      | 0.363        | 0.000 (0.000)    | 0.044 (0.004)    | 0 (0.000) |     2.00 | Austin, Cooper, fl0m, hyza, Trucklover86        |
|            6 |     3993 | 2025-10-06 | Wildcard        | L   | 0.223      | -            | -                | -                | -         |    -2.97 | Cooper, fl0m, hyza, PwnAlone, Trucklover86      |
|            5 |     4057 | 2025-10-05 | anything else   | W   | 0.216      | 0.363        | 0.000 (0.000)    | 0.004 (0.000)    | 0 (0.000) |     1.82 | Cooper, fl0m, hyza, PwnAlone, Trucklover86      |
|            4 |     4944 | 2025-09-11 | Aether          | L   | 0.056      | -            | -                | -                | -         |    -1.01 | Cooper, fl0m, hyza, PwnAlone, Trucklover86      |
|            3 |     5049 | 2025-09-09 | Voca            | L   | 0.043      | -            | -                | -                | -         |    -0.57 | Cooper, fl0m, hyza, PwnAlone, Trucklover86      |
|            2 |     5102 | 2025-09-08 | anything else   | W   | 0.036      | 0.363        | 0.000 (0.000)    | 0.004 (0.000)    | 0 (0.000) |     0.30 | Cooper, fl0m, hyza, PwnAlone, Trucklover86      |
|            1 |     5182 | 2025-09-06 | Chicken Coop    | L   | 0.021      | -            | -                | -                | -         |    -0.46 | Austin, BiBiAhn, Cooper, PwnAlone, Trucklover86 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($489.72)
- Divide that value by the 5th highest value among all rosters ($334,320.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-11-15 |      0.490 | $1,000.00      | $489.72         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
