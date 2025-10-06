### Roster Details<br />
Team Name: anything else<br />
Roster: cypress, FAME, K4mr0, mcniff, Slash<br />
Global Rank: [228](../../standings_global_2025_10_06.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_10_06.md)<br />
Regional Rank: [68]( ../../standings_americas_2025_10_06.md)<br />
<br />
Final Rank Value:  499.1<br />
<br />
Final Rank Value (499.1) = Starting Rank Value (478.6) + Head To Head Adjustments (20.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.147[<sup>2</sup>](#table1)
- Opponent Network: 0.014[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.040<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 478.6
- 400 + ( ( 0.040 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 478.6


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
|           16 |      658 | 2025-09-12 | LAG          | L   | 1.000      | -            | -                | -                | -         |    -5.68 | corim, cypress, FAME, mcniff, Slash  |
|           15 |      704 | 2025-09-11 | NYX          | W   | 1.000      | 0.363        | 0.000 (0.000)    | 0.041 (0.015)    | 0 (0.000) |    18.14 | corim, cypress, FAME, mcniff, Slash  |
|           14 |      747 | 2025-09-10 | ASPYRE       | W   | 1.000      | 0.363        | 0.000 (0.000)    | 0.181 (0.066)    | 0 (0.000) |    21.86 | corim, cypress, FAME, mcniff, Slash  |
|           13 |      842 | 2025-09-08 | Mythic       | L   | 1.000      | -            | -                | -                | -         |   -13.88 | cypress, FAME, K4mr0, mcniff, Slash  |
|           12 |     1491 | 2025-08-13 | Wanted Goons | L   | 0.843      | -            | -                | -                | -         |   -11.84 | cypress, FAME, K4mr0, mcniff, Slash  |
|           11 |     1547 | 2025-08-12 | NRG          | L   | 0.836      | -            | -                | -                | -         |    -0.42 | cypress, FAME, K4mr0, mcniff, Slash  |
|           10 |     1591 | 2025-08-11 | MIGHT        | W   | 0.830      | 0.363        | 0.000 (0.000)    | 0.109 (0.033)    | 0 (0.000) |    13.87 | cypress, FAME, K4mr0, mcniff, Slash  |
|            9 |     2199 | 2025-07-11 | Getting Info | L   | 0.623      | -            | -                | -                | -         |    -2.32 | cypress, FAME, mcniff, Slash, Weeza  |
|            8 |     2213 | 2025-07-11 | TSG          | W   | 0.621      | 0.143        | 0.000 (0.000)    | 0.074 (0.007)    | 0 (0.000) |    10.46 | cypress, FAME, mcniff, Slash, Weeza  |
|            7 |     2600 | 2025-06-12 | Nocturnal    | L   | 0.430      | -            | -                | -                | -         |    -5.18 | cypress, FAME, K4mr0, mcniff, Slash  |
|            6 |     2645 | 2025-06-10 | Subtick      | L   | 0.416      | -            | -                | -                | -         |    -7.99 | cypress, FAME, K4mr0, mcniff, Slash  |
|            5 |     2650 | 2025-06-10 | MONEY CREW   | L   | 0.415      | -            | -                | -                | -         |    -3.56 | cypress, FAME, K4mr0, mcniff, Slash  |
|            4 |     3060 | 2025-05-14 | Wildcard     | L   | 0.236      | -            | -                | -                | -         |    -0.14 | cypress, FAME, K4mr0, mcniff, Slash  |
|            3 |     3127 | 2025-05-12 | MIGHT        | W   | 0.222      | 0.384        | 0.000 (0.000)    | 0.109 (0.009)    | 0 (0.000) |     3.85 | Calix, cypress, K4mr0, mcniff, Slash |
|            2 |     3183 | 2025-05-10 | Legacy       | L   | 0.208      | -            | -                | -                | -         |    -0.06 | cypress, FAME, K4mr0, mcniff, Slash  |
|            1 |     3225 | 2025-05-08 | MIGHT        | W   | 0.197      | 0.384        | 0.000 (0.000)    | 0.109 (0.008)    | 0 (0.000) |     3.41 | cypress, FAME, K4mr0, mcniff, Slash  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($380,085.28)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
