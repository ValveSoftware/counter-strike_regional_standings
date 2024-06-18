### Roster Details<br />
Team Name: Ninjas in Pyjamas<br />
Roster: alex, isak, maxster, r1nkle, REZ<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [14](../standings_global.md)<br />
Regional Rank: [11]( ../standings_europe.md)<br />
Final Rank Value:  1624.5<br />
<br />
Final Rank Value (1624.5) = Starting Rank Value (1775.0) + Head To Head Adjustments (-150.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.666[<sup>1</sup>](#table2)
- Bounty Collected: 0.608[<sup>2</sup>](#table1)
- Opponent Network: 0.433[<sup>2</sup>](#table1)
- LAN Wins: 1.000[<sup>2</sup>](#table1)

The average of these factors is 0.677<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1775.0
- 400 + ( ( 0.677 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 1775.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           31 |       11 | 2024-06-16 | fnatic          | L   | 1.000      | -            | -                | -                | -         |   -23.39 | alex, isak, maxster, r1nkle, REZ               |
|           30 |       72 | 2024-06-14 | paiN            | W   | 1.000      | 0.548        | 0.492 (0.270)    | 0.775 (0.425)    | 1 (1.000) |     9.05 | alex, isak, maxster, r1nkle, REZ               |
|           29 |       80 | 2024-06-14 | 9z              | W   | 1.000      | 0.548        | 0.525 (0.288)    | 0.749 (0.411)    | 1 (1.000) |    10.44 | alex, isak, maxster, r1nkle, REZ               |
|           28 |      241 | 2024-06-09 | The MongolZ     | L   | 1.000      | -            | -                | -                | -         |    -6.53 | alex, isak, maxster, r1nkle, REZ               |
|           27 |      307 | 2024-06-08 | FURIA           | W   | 1.000      | 0.715        | 0.245 (0.175)    | 0.521 (0.373)    | 1 (1.000) |    11.67 | alex, isak, maxster, r1nkle, REZ               |
|           26 |      357 | 2024-06-07 | fnatic          | W   | 1.000      | 0.715        | 0.290 (0.207)    | 0.666 (0.476)    | 1 (1.000) |     8.47 | alex, isak, maxster, r1nkle, REZ               |
|           25 |      423 | 2024-06-06 | Sashi           | W   | 1.000      | 0.715        | 0.200 (0.143)    | 1.000 (0.715)    | 1 (1.000) |     4.22 | alex, isak, maxster, r1nkle, REZ               |
|           24 |      445 | 2024-06-06 | The MongolZ     | L   | 1.000      | -            | -                | -                | -         |    -6.18 | alex, isak, maxster, r1nkle, REZ               |
|           23 |      457 | 2024-06-06 | Astralis        | W   | 1.000      | 0.715        | 0.533 (0.381)    | 0.501 (0.358)    | 1 (1.000) |    25.25 | alex, isak, maxster, r1nkle, REZ               |
|           22 |      491 | 2024-06-05 | HEROIC          | W   | 1.000      | 0.715        | 0.354 (0.253)    | 0.545 (0.390)    | 1 (1.000) |    21.25 | alex, isak, maxster, r1nkle, REZ               |
|           21 |      508 | 2024-06-05 | ENCE            | W   | 1.000      | 0.715        | 0.229 (0.163)    | -                | 1 (1.000) |     7.63 | alex, isak, maxster, r1nkle, REZ               |
|           20 |      957 | 2024-05-19 | Sangal          | L   | 1.000      | -            | -                | -                | -         |   -29.46 | alex, isak, maxster, r1nkle, REZ               |
|           19 |      983 | 2024-05-18 | Metizport       | L   | 0.996      | -            | -                | -                | -         |   -29.75 | alex, isak, maxster, r1nkle, REZ               |
|           18 |     1058 | 2024-05-16 | Sangal          | W   | 0.983      | 0.500        | 0.216 (0.106)    | 0.884 (0.434)    | -         |     1.32 | alex, isak, maxster, r1nkle, REZ               |
|           17 |     1376 | 2024-05-05 | FlyQuest        | L   | 0.908      | -            | -                | -                | -         |   -22.34 | alex, BluePho3nix, maxster, r1nkle, xKacpersky |
|           16 |     1383 | 2024-05-04 | HEROIC          | W   | 0.902      | 0.889        | 0.354 (0.284)    | 0.545 (0.437)    | 1 (0.902) |    17.55 | alex, BluePho3nix, maxster, r1nkle, xKacpersky |
|           15 |     1397 | 2024-05-03 | BOSS            | W   | 0.896      | 0.889        | -                | 0.386 (0.308)    | 1 (0.896) |     0.40 | alex, BluePho3nix, maxster, r1nkle, xKacpersky |
|           14 |     1425 | 2024-05-02 | PERA            | L   | 0.889      | -            | -                | -                | -         |   -27.44 | alex, BluePho3nix, maxster, r1nkle, xKacpersky |
|           13 |     1472 | 2024-04-30 | HEROIC          | L   | 0.875      | -            | -                | -                | -         |   -10.13 | alex, BluePho3nix, maxster, r1nkle, xKacpersky |
|           12 |     1781 | 2024-04-18 | brazylijski luz | L   | 0.795      | -            | -                | -                | -         |   -24.83 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|           11 |     1925 | 2024-04-12 | OG              | L   | 0.755      | -            | -                | -                | -         |   -22.25 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|           10 |     1951 | 2024-04-11 | BetBoom         | L   | 0.749      | -            | -                | -                | -         |   -16.23 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|            9 |     2048 | 2024-04-09 | Gods Reign      | W   | 0.736      | -            | -                | -                | -         |     0.19 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|            8 |     2178 | 2024-04-04 | Aurora          | L   | 0.703      | -            | -                | -                | -         |   -14.52 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|            7 |     2186 | 2024-04-04 | Metizport       | W   | 0.702      | -            | -                | -                | -         |     0.46 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|            6 |     2219 | 2024-04-03 | Aurora          | L   | 0.696      | -            | -                | -                | -         |   -15.17 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|            5 |     2234 | 2024-04-03 | Sampi           | L   | 0.694      | -            | -                | -                | -         |   -21.61 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|            4 |     2258 | 2024-04-02 | FAVBET          | W   | 0.689      | -            | -                | -                | -         |     0.11 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|            3 |     2263 | 2024-04-02 | Monte           | W   | 0.689      | -            | -                | -                | -         |     1.12 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|            2 |     2353 | 2024-03-27 | 500             | W   | 0.650      | -            | -                | -                | -         |     0.09 | alex, BluePho3nix, maxster, REZ, Silence       |
|            1 |     2359 | 2024-03-27 | Verdant         | W   | 0.649      | -            | -                | -                | -         |     0.11 | alex, BluePho3nix, maxster, REZ, Silence       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($94,652.71)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.31) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      1.000 | $7,000.00      | $7,000.00       |
| 2024-06-09 |      1.000 | $56,000.00     | $56,000.00      |
| 2024-05-12 |      0.956 | $12,000.00     | $11,466.34      |
| 2024-04-14 |      0.769 | $26,250.00     | $20,186.36      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
