### Roster Details<br />
Team Name: Ninjas in Pyjamas<br />
Roster: alex, isak, maxster, r1nkle, REZ<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [12](../standings_global.md)<br />
Regional Rank: [10]( ../standings_europe.md)<br />
Final Rank Value:  1677.7<br />
<br />
Final Rank Value (1677.7) = Starting Rank Value (1810.0) + Head To Head Adjustments (-132.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.681[<sup>1</sup>](#table2)
- Bounty Collected: 0.602[<sup>2</sup>](#table1)
- Opponent Network: 0.391[<sup>2</sup>](#table1)
- LAN Wins: 1.000[<sup>2</sup>](#table1)

The average of these factors is 0.669<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1810.0
- 400 + ( ( 0.669 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 1810.0


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
|           31 |      147 | 2024-06-16 | fnatic          | L   | 1.000      | -            | -                | -                | -         |   -23.82 | alex, isak, maxster, r1nkle, REZ               |
|           30 |      208 | 2024-06-14 | paiN            | W   | 1.000      | 0.548        | 0.478 (0.262)    | 0.768 (0.421)    | 1 (1.000) |     7.28 | alex, isak, maxster, r1nkle, REZ               |
|           29 |      216 | 2024-06-14 | 9z              | W   | 1.000      | 0.548        | 0.586 (0.322)    | 0.749 (0.410)    | 1 (1.000) |    10.68 | alex, isak, maxster, r1nkle, REZ               |
|           28 |      377 | 2024-06-09 | The MongolZ     | L   | 0.987      | -            | -                | -                | -         |    -6.68 | alex, isak, maxster, r1nkle, REZ               |
|           27 |      443 | 2024-06-08 | FURIA           | W   | 0.980      | 0.715        | 0.253 (0.178)    | 0.509 (0.357)    | 1 (0.980) |    10.32 | alex, isak, maxster, r1nkle, REZ               |
|           26 |      493 | 2024-06-07 | fnatic          | W   | 0.974      | 0.715        | 0.298 (0.208)    | 0.623 (0.434)    | 1 (0.974) |     7.85 | alex, isak, maxster, r1nkle, REZ               |
|           25 |      559 | 2024-06-06 | Sashi           | W   | 0.967      | 0.715        | 0.202 (0.140)    | 1.000 (0.692)    | 1 (0.967) |     2.80 | alex, isak, maxster, r1nkle, REZ               |
|           24 |      581 | 2024-06-06 | The MongolZ     | L   | 0.966      | -            | -                | -                | -         |    -6.21 | alex, isak, maxster, r1nkle, REZ               |
|           23 |      593 | 2024-06-06 | Astralis        | W   | 0.965      | 0.715        | 0.546 (0.377)    | 0.461 (0.318)    | 1 (0.965) |    22.89 | alex, isak, maxster, r1nkle, REZ               |
|           22 |      627 | 2024-06-05 | HEROIC          | W   | 0.960      | 0.715        | 0.338 (0.232)    | 0.480 (0.330)    | 1 (0.960) |    18.13 | alex, isak, maxster, r1nkle, REZ               |
|           21 |      644 | 2024-06-05 | ENCE            | W   | 0.959      | 0.715        | 0.216 (0.148)    | 0.399 (0.273)    | 1 (0.959) |     5.29 | alex, isak, maxster, r1nkle, REZ               |
|           20 |     1091 | 2024-05-19 | Sangal          | L   | 0.847      | -            | -                | -                | -         |   -25.38 | alex, isak, maxster, r1nkle, REZ               |
|           19 |     1117 | 2024-05-18 | Metizport       | L   | 0.840      | -            | -                | -                | -         |   -25.64 | alex, isak, maxster, r1nkle, REZ               |
|           18 |     1192 | 2024-05-16 | Sangal          | W   | 0.827      | 0.500        | 0.231 (0.095)    | 0.853 (0.353)    | -         |     0.91 | alex, isak, maxster, r1nkle, REZ               |
|           17 |     1510 | 2024-05-05 | FlyQuest        | L   | 0.752      | -            | -                | -                | -         |   -20.49 | alex, BluePho3nix, maxster, r1nkle, xKacpersky |
|           16 |     1517 | 2024-05-04 | HEROIC          | W   | 0.747      | 0.889        | 0.338 (0.224)    | 0.480 (0.319)    | 1 (0.747) |    12.88 | alex, BluePho3nix, maxster, r1nkle, xKacpersky |
|           15 |     1531 | 2024-05-03 | BOSS            | W   | 0.741      | -            | -                | -                | 1 (0.741) |     0.23 | alex, BluePho3nix, maxster, r1nkle, xKacpersky |
|           14 |     1559 | 2024-05-02 | PERA            | L   | 0.733      | -            | -                | -                | -         |   -22.73 | alex, BluePho3nix, maxster, r1nkle, xKacpersky |
|           13 |     1606 | 2024-04-30 | HEROIC          | L   | 0.720      | -            | -                | -                | -         |   -10.16 | alex, BluePho3nix, maxster, r1nkle, xKacpersky |
|           12 |     1915 | 2024-04-18 | brazylijski luz | L   | 0.640      | -            | -                | -                | -         |   -20.02 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|           11 |     2059 | 2024-04-12 | OG              | L   | 0.599      | -            | -                | -                | -         |   -18.15 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|           10 |     2085 | 2024-04-11 | BetBoom         | L   | 0.593      | -            | -                | -                | -         |   -13.35 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|            9 |     2182 | 2024-04-09 | Gods Reign      | W   | 0.580      | -            | -                | -                | -         |     0.11 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|            8 |     2312 | 2024-04-04 | Aurora          | L   | 0.547      | -            | -                | -                | -         |   -11.54 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|            7 |     2320 | 2024-04-04 | Metizport       | W   | 0.546      | -            | -                | -                | -         |     0.24 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|            6 |     2353 | 2024-04-03 | Aurora          | L   | 0.540      | -            | -                | -                | -         |   -11.88 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|            5 |     2368 | 2024-04-03 | Slovakia        | L   | 0.538      | -            | -                | -                | -         |   -16.81 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|            4 |     2392 | 2024-04-02 | FAVBET          | W   | 0.534      | -            | -                | -                | -         |     0.07 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|            3 |     2397 | 2024-04-02 | Monte           | W   | 0.533      | -            | -                | -                | -         |     0.67 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|            2 |     2486 | 2024-03-27 | 500             | W   | 0.494      | -            | -                | -                | -         |     0.05 | alex, BluePho3nix, maxster, REZ, Silence       |
|            1 |     2492 | 2024-03-27 | Verdant         | W   | 0.493      | -            | -                | -                | -         |     0.07 | alex, BluePho3nix, maxster, REZ, Silence       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($87,946.81)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.34) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      1.000 | $7,000.00      | $7,000.00       |
| 2024-06-09 |      0.987 | $56,000.00     | $55,248.60      |
| 2024-05-12 |      0.800 | $12,000.00     | $9,598.27       |
| 2024-04-14 |      0.613 | $26,250.00     | $16,099.95      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
