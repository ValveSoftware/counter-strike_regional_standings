### Roster Details<br />
Team Name: Ninjas in Pyjamas<br />
Roster: alex, isak, maxster, r1nkle, REZ<br />
Global Rank: [17](../../standings_global_2024_08_21.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_08_21.md)<br />
Regional Rank: [13]( ../../standings_europe_2024_08_21.md)<br />
<br />
Final Rank Value:  1469.4<br />
<br />
Final Rank Value (1469.4) = Starting Rank Value (1556.1) + Head To Head Adjustments (-86.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.611[<sup>1</sup>](#table2)
- Bounty Collected: 0.556[<sup>2</sup>](#table1)
- Opponent Network: 0.289[<sup>2</sup>](#table1)
- LAN Wins: 0.874[<sup>2</sup>](#table1)

The average of these factors is 0.582<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1556.1
- 400 + ( ( 0.582 - 0.000 ) / ( 0.806 - 0.000 ) ) * 1600 = 1556.1


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
|           41 |       99 | 2024-08-19 | Cloud9          | L   | 1.000      | -            | -                | -                | -         |   -30.53 | alex, isak, maxster, r1nkle, REZ               |
|           40 |      106 | 2024-08-19 | PARIVISION      | W   | 1.000      | -            | -                | -                | -         |     3.48 | alex, isak, maxster, r1nkle, REZ               |
|           39 |      569 | 2024-08-04 | Astralis        | L   | 1.000      | -            | -                | -                | -         |    -8.74 | alex, isak, maxster, r1nkle, REZ               |
|           38 |      593 | 2024-08-03 | G2              | L   | 1.000      | -            | -                | -                | -         |    -2.23 | alex, isak, maxster, r1nkle, REZ               |
|           37 |      631 | 2024-08-02 | FaZe            | W   | 1.000      | 0.581        | 0.658 (0.382)    | 0.394 (0.229)    | 1 (1.000) |    24.36 | alex, isak, maxster, r1nkle, REZ               |
|           36 |      675 | 2024-08-01 | Cloud9          | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.59 | alex, isak, maxster, r1nkle, REZ               |
|           35 |      727 | 2024-07-31 | G2              | L   | 1.000      | -            | -                | -                | -         |    -2.07 | alex, isak, maxster, r1nkle, REZ               |
|           34 |     1081 | 2024-07-20 | Passion UA      | L   | 0.985      | -            | -                | -                | -         |   -28.35 | alex, isak, maxster, r1nkle, REZ               |
|           33 |     1155 | 2024-07-18 | MOUZ NXT        | W   | 0.973      | 0.500        | -                | 0.885 (0.431)    | -         |     2.19 | alex, isak, maxster, r1nkle, REZ               |
|           32 |     1287 | 2024-07-16 | Nexus           | W   | 0.960      | 0.500        | -                | 0.489 (0.234)    | -         |     0.44 | alex, isak, maxster, r1nkle, REZ               |
|           31 |     1549 | 2024-06-16 | fnatic          | L   | 0.760      | -            | -                | -                | -         |   -15.99 | alex, isak, maxster, r1nkle, REZ               |
|           30 |     1610 | 2024-06-14 | paiN            | W   | 0.748      | 0.548        | 0.357 (0.147)    | 0.797 (0.327)    | 1 (0.748) |     9.46 | alex, isak, maxster, r1nkle, REZ               |
|           29 |     1618 | 2024-06-14 | 9z              | W   | 0.746      | 0.548        | 0.400 (0.164)    | 0.522 (0.214)    | 1 (0.746) |    10.14 | alex, isak, maxster, r1nkle, REZ               |
|           28 |     1779 | 2024-06-09 | The MongolZ     | L   | 0.712      | -            | -                | -                | -         |    -2.74 | alex, isak, maxster, r1nkle, REZ               |
|           27 |     1845 | 2024-06-08 | FURIA           | W   | 0.706      | 0.715        | 0.300 (0.152)    | 0.445 (0.225)    | 1 (0.706) |    13.37 | alex, isak, maxster, r1nkle, REZ               |
|           26 |     1895 | 2024-06-07 | fnatic          | W   | 0.700      | 0.715        | 0.348 (0.174)    | 0.677 (0.339)    | 1 (0.700) |     8.38 | alex, isak, maxster, r1nkle, REZ               |
|           25 |     1961 | 2024-06-06 | Sashi           | W   | 0.693      | 0.715        | 0.180 (0.089)    | 0.989 (0.490)    | 1 (0.693) |     3.18 | alex, isak, maxster, r1nkle, REZ               |
|           24 |     1983 | 2024-06-06 | The MongolZ     | L   | 0.692      | -            | -                | -                | -         |    -2.29 | alex, isak, maxster, r1nkle, REZ               |
|           23 |     1995 | 2024-06-06 | Astralis        | W   | 0.690      | 0.715        | 0.403 (0.199)    | 0.363 (0.179)    | 1 (0.690) |    16.26 | alex, isak, maxster, r1nkle, REZ               |
|           22 |     2029 | 2024-06-05 | HEROIC          | W   | 0.686      | 0.715        | 0.229 (0.112)    | -                | 1 (0.686) |    11.36 | alex, isak, maxster, r1nkle, REZ               |
|           21 |     2046 | 2024-06-05 | ENCE            | W   | 0.684      | 0.715        | 0.157 (0.077)    | -                | 1 (0.684) |     6.08 | alex, isak, maxster, r1nkle, REZ               |
|           20 |     2493 | 2024-05-19 | Sangal          | L   | 0.573      | -            | -                | -                | -         |   -15.70 | alex, isak, maxster, r1nkle, REZ               |
|           19 |     2519 | 2024-05-18 | Metizport       | L   | 0.566      | -            | -                | -                | -         |   -17.38 | alex, isak, maxster, r1nkle, REZ               |
|           18 |     2594 | 2024-05-16 | Sangal          | W   | 0.553      | 0.500        | -                | 0.800 (0.221)    | -         |     1.89 | alex, isak, maxster, r1nkle, REZ               |
|           17 |     2912 | 2024-05-05 | FlyQuest        | L   | 0.478      | -            | -                | -                | -         |   -13.68 | alex, BluePho3nix, maxster, r1nkle, xKacpersky |
|           16 |     2919 | 2024-05-04 | HEROIC          | W   | 0.473      | 0.889        | 0.229 (0.096)    | -                | -         |     6.88 | alex, BluePho3nix, maxster, r1nkle, xKacpersky |
|           15 |     2933 | 2024-05-03 | BOSS            | W   | 0.466      | -            | -                | -                | -         |     0.30 | alex, BluePho3nix, maxster, r1nkle, xKacpersky |
|           14 |     2961 | 2024-05-02 | Qiang           | L   | 0.459      | -            | -                | -                | -         |   -13.96 | alex, BluePho3nix, maxster, r1nkle, xKacpersky |
|           13 |     3008 | 2024-04-30 | HEROIC          | L   | 0.446      | -            | -                | -                | -         |    -7.70 | alex, BluePho3nix, maxster, r1nkle, xKacpersky |
|           12 |     3317 | 2024-04-18 | brazylijski luz | L   | 0.366      | -            | -                | -                | -         |   -11.35 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|           11 |     3461 | 2024-04-12 | OG              | L   | 0.325      | -            | -                | -                | -         |    -9.82 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|           10 |     3487 | 2024-04-11 | BetBoom         | L   | 0.319      | -            | -                | -                | -         |    -7.69 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|            9 |     3584 | 2024-04-09 | Gods Reign      | W   | 0.306      | -            | -                | -                | -         |     0.11 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|            8 |     3714 | 2024-04-04 | Aurora          | L   | 0.273      | -            | -                | -                | -         |    -3.83 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|            7 |     3722 | 2024-04-04 | Metizport       | W   | 0.272      | -            | -                | -                | -         |     0.15 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|            6 |     3755 | 2024-04-03 | Aurora          | L   | 0.266      | -            | -                | -                | -         |    -3.82 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|            5 |     3770 | 2024-04-03 | Sampi           | L   | 0.264      | -            | -                | -                | -         |    -8.15 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|            4 |     3794 | 2024-04-02 | FAVBET          | W   | 0.260      | -            | -                | -                | -         |     0.11 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|            3 |     3799 | 2024-04-02 | Monte           | W   | 0.259      | -            | -                | -                | -         |     0.37 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|            2 |     3888 | 2024-03-27 | 500             | W   | 0.220      | -            | -                | -                | -         |     0.05 | alex, BluePho3nix, maxster, REZ, Silence       |
|            1 |     3894 | 2024-03-27 | Verdant         | W   | 0.219      | -            | -                | -                | -         |     0.19 | alex, BluePho3nix, maxster, REZ, Silence       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($70,941.35)
- Divide that value by the 5th highest value among all rosters ($307,820.64)
- The final value (0.23) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-08-04 |      1.000 | $10,500.00     | $10,500.00      |
| 2024-06-16 |      0.761 | $7,000.00      | $5,328.97       |
| 2024-06-09 |      0.712 | $56,000.00     | $39,898.70      |
| 2024-05-12 |      0.526 | $12,000.00     | $6,309.00       |
| 2024-04-14 |      0.339 | $26,250.00     | $8,904.68       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
