### Roster Details<br />
Team Name: Ninjas in Pyjamas<br />
Roster: alex, isak, maxster, r1nkle, REZ<br />
Global Rank: [14](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [11]( ../standings_europe.md)<br />
<br />
Final Rank Value:  1539.8<br />
<br />
Final Rank Value (1539.8) = Starting Rank Value (1647.8) + Head To Head Adjustments (-108.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.608[<sup>1</sup>](#table2)
- Bounty Collected: 0.547[<sup>2</sup>](#table1)
- Opponent Network: 0.344[<sup>2</sup>](#table1)
- LAN Wins: 0.918[<sup>2</sup>](#table1)

The average of these factors is 0.604<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1647.8
- 400 + ( ( 0.604 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 1647.8


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
|           35 |       19 | 2024-07-31 | G2              | L   | 1.000      | -            | -                | -                | -         |    -2.86 | alex, isak, maxster, r1nkle, REZ               |
|           34 |      373 | 2024-07-20 | Passion UA      | L   | 1.000      | -            | -                | -                | -         |   -29.48 | alex, isak, maxster, r1nkle, REZ               |
|           33 |      447 | 2024-07-18 | MOUZ NXT        | W   | 1.000      | 0.500        | -                | 1.000 (0.500)    | -         |     1.86 | alex, isak, maxster, r1nkle, REZ               |
|           32 |      579 | 2024-07-16 | Nexus           | W   | 1.000      | 0.500        | -                | 0.465 (0.233)    | -         |     0.33 | alex, isak, maxster, r1nkle, REZ               |
|           31 |      841 | 2024-06-16 | fnatic          | L   | 0.900      | -            | -                | -                | -         |   -18.34 | alex, isak, maxster, r1nkle, REZ               |
|           30 |      902 | 2024-06-14 | paiN            | W   | 0.888      | 0.548        | 0.305 (0.149)    | 0.796 (0.388)    | 1 (0.888) |     6.63 | alex, isak, maxster, r1nkle, REZ               |
|           29 |      910 | 2024-06-14 | 9z              | W   | 0.886      | 0.548        | 0.412 (0.200)    | 0.625 (0.304)    | 1 (0.886) |     9.60 | alex, isak, maxster, r1nkle, REZ               |
|           28 |     1071 | 2024-06-09 | The MongolZ     | L   | 0.852      | -            | -                | -                | -         |    -3.76 | alex, isak, maxster, r1nkle, REZ               |
|           27 |     1137 | 2024-06-08 | FURIA           | W   | 0.846      | 0.715        | 0.286 (0.173)    | 0.495 (0.300)    | 1 (0.846) |    14.82 | alex, isak, maxster, r1nkle, REZ               |
|           26 |     1187 | 2024-06-07 | fnatic          | W   | 0.840      | 0.715        | 0.374 (0.225)    | 0.633 (0.380)    | 1 (0.840) |    10.52 | alex, isak, maxster, r1nkle, REZ               |
|           25 |     1253 | 2024-06-06 | Sashi           | W   | 0.833      | 0.715        | 0.187 (0.111)    | 0.973 (0.580)    | 1 (0.833) |     3.43 | alex, isak, maxster, r1nkle, REZ               |
|           24 |     1275 | 2024-06-06 | The MongolZ     | L   | 0.832      | -            | -                | -                | -         |    -3.09 | alex, isak, maxster, r1nkle, REZ               |
|           23 |     1287 | 2024-06-06 | Astralis        | W   | 0.830      | 0.715        | 0.360 (0.214)    | 0.386 (0.229)    | 1 (0.830) |    18.22 | alex, isak, maxster, r1nkle, REZ               |
|           22 |     1321 | 2024-06-05 | HEROIC          | W   | 0.826      | 0.715        | 0.210 (0.124)    | -                | 1 (0.826) |    14.81 | alex, isak, maxster, r1nkle, REZ               |
|           21 |     1338 | 2024-06-05 | ENCE            | W   | 0.824      | 0.715        | 0.175 (0.103)    | 0.404 (0.238)    | 1 (0.824) |     7.55 | alex, isak, maxster, r1nkle, REZ               |
|           20 |     1785 | 2024-05-19 | Sangal          | L   | 0.713      | -            | -                | -                | -         |   -20.60 | alex, isak, maxster, r1nkle, REZ               |
|           19 |     1811 | 2024-05-18 | Metizport       | L   | 0.706      | -            | -                | -                | -         |   -21.34 | alex, isak, maxster, r1nkle, REZ               |
|           18 |     1886 | 2024-05-16 | Sangal          | W   | 0.693      | 0.500        | 0.221 (0.077)    | 0.824 (0.285)    | -         |     1.42 | alex, isak, maxster, r1nkle, REZ               |
|           17 |     2204 | 2024-05-05 | FlyQuest        | L   | 0.618      | -            | -                | -                | -         |   -17.08 | alex, BluePho3nix, maxster, r1nkle, xKacpersky |
|           16 |     2211 | 2024-05-04 | HEROIC          | W   | 0.613      | 0.889        | 0.210 (0.114)    | -                | 1 (0.613) |     9.86 | alex, BluePho3nix, maxster, r1nkle, xKacpersky |
|           15 |     2225 | 2024-05-03 | BOSS            | W   | 0.606      | -            | -                | -                | 1 (0.606) |     0.32 | alex, BluePho3nix, maxster, r1nkle, xKacpersky |
|           14 |     2253 | 2024-05-02 | PERA            | L   | 0.599      | -            | -                | -                | -         |   -18.40 | alex, BluePho3nix, maxster, r1nkle, xKacpersky |
|           13 |     2300 | 2024-04-30 | HEROIC          | L   | 0.585      | -            | -                | -                | -         |    -9.07 | alex, BluePho3nix, maxster, r1nkle, xKacpersky |
|           12 |     2609 | 2024-04-18 | brazylijski luz | L   | 0.506      | -            | -                | -                | -         |   -15.73 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|           11 |     2753 | 2024-04-12 | OG              | L   | 0.465      | -            | -                | -                | -         |   -14.09 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|           10 |     2779 | 2024-04-11 | BetBoom         | L   | 0.459      | -            | -                | -                | -         |   -10.85 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|            9 |     2876 | 2024-04-09 | Gods Reign      | W   | 0.446      | -            | -                | -                | -         |     0.14 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|            8 |     3006 | 2024-04-04 | Aurora          | L   | 0.413      | -            | -                | -                | -         |    -5.61 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|            7 |     3014 | 2024-04-04 | Metizport       | W   | 0.412      | -            | -                | -                | -         |     0.27 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|            6 |     3047 | 2024-04-03 | Aurora          | L   | 0.406      | -            | -                | -                | -         |    -5.71 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|            5 |     3062 | 2024-04-03 | Sampi           | L   | 0.404      | -            | -                | -                | -         |   -12.53 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|            4 |     3086 | 2024-04-02 | FAVBET          | W   | 0.400      | -            | -                | -                | -         |     0.11 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|            3 |     3091 | 2024-04-02 | Monte           | W   | 0.399      | -            | -                | -                | -         |     0.33 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|            2 |     3180 | 2024-03-27 | 500             | W   | 0.360      | -            | -                | -                | -         |     0.07 | alex, BluePho3nix, maxster, REZ, Silence       |
|            1 |     3186 | 2024-03-27 | Verdant         | W   | 0.359      | -            | -                | -                | -         |     0.22 | alex, BluePho3nix, maxster, REZ, Silence       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($74,614.56)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.23) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      0.901 | $7,000.00      | $6,308.84       |
| 2024-06-09 |      0.852 | $56,000.00     | $47,737.71      |
| 2024-05-12 |      0.666 | $12,000.00     | $7,988.79       |
| 2024-04-14 |      0.479 | $26,250.00     | $12,579.21      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
