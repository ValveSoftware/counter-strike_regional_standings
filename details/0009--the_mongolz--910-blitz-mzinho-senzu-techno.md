### Roster Details<br />
Team Name: The MongolZ<br />
Roster: 910, bLitz, mzinho, Senzu, Techno<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [9](../standings_global.md)<br />
Regional Rank: [1]( ../standings_asia.md)<br />
Final Rank Value:  1699.4<br />
<br />
Final Rank Value (1699.4) = Starting Rank Value (1917.2) + Head To Head Adjustments (-217.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 1.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.612[<sup>2</sup>](#table1)
- Opponent Network: 0.386[<sup>2</sup>](#table1)
- LAN Wins: 1.000[<sup>2</sup>](#table1)

The average of these factors is 0.749<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1917.2
- 400 + ( ( 0.749 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 1917.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           54 |        5 | 2024-07-24 | ENCE              | W   | 1.000      | -            | -                | -                | 1 (1.000) |     3.69 | 910, bLitz, mzinho, Senzu, Techno |
|           53 |       12 | 2024-07-24 | PARIVISION        | L   | 1.000      | -            | -                | -                | -         |   -30.82 | 910, bLitz, mzinho, Senzu, Techno |
|           52 |       50 | 2024-07-23 | True Rippers      | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.13 | 910, bLitz, mzinho, Senzu, Techno |
|           51 |      210 | 2024-07-18 | FURIA             | L   | 1.000      | -            | -                | -                | -         |   -20.05 | 910, bLitz, mzinho, Senzu, Techno |
|           50 |      215 | 2024-07-18 | M80               | W   | 1.000      | 1.000        | 0.238 (0.238)    | 0.614 (0.614)    | 1 (1.000) |     2.60 | 910, bLitz, mzinho, Senzu, Techno |
|           49 |      229 | 2024-07-18 | MIBR              | W   | 1.000      | 1.000        | 0.257 (0.257)    | 0.561 (0.561)    | 1 (1.000) |     4.51 | 910, bLitz, mzinho, Senzu, Techno |
|           48 |      297 | 2024-07-17 | G2                | L   | 1.000      | -            | -                | -                | -         |    -7.95 | 910, bLitz, mzinho, Senzu, Techno |
|           47 |      456 | 2024-07-11 | CatEvil           | L   | 1.000      | -            | -                | -                | -         |   -31.45 | 910, bLitz, mzinho, Senzu, Techno |
|           46 |      460 | 2024-07-11 | Rare Atom         | L   | 1.000      | -            | -                | -                | -         |   -31.43 | 910, bLitz, mzinho, Senzu, Techno |
|           45 |      463 | 2024-07-11 | Steel Helmet      | W   | 1.000      | -            | -                | -                | -         |     0.03 | 910, bLitz, mzinho, Senzu, Techno |
|           44 |      644 | 2024-06-15 | Falcons           | L   | 0.939      | -            | -                | -                | -         |   -26.63 | 910, bLitz, mzinho, Senzu, Techno |
|           43 |      687 | 2024-06-14 | Aurora            | L   | 0.932      | -            | -                | -                | -         |   -27.70 | 910, bLitz, mzinho, Senzu, Techno |
|           42 |      698 | 2024-06-14 | Party Astronauts  | W   | 0.930      | 0.500        | -                | 0.591 (0.275)    | 1 (0.930) |     0.23 | 910, bLitz, mzinho, Senzu, Techno |
|           41 |      829 | 2024-06-09 | Ninjas in Pyjamas | W   | 0.900      | 0.715        | 0.287 (0.185)    | 0.537 (0.346)    | 1 (0.900) |     5.74 | 910, bLitz, mzinho, Senzu, Techno |
|           40 |      907 | 2024-06-08 | Astralis          | W   | 0.893      | 0.715        | 0.457 (0.292)    | 0.398 (0.254)    | 1 (0.893) |     9.20 | 910, bLitz, mzinho, Senzu, Techno |
|           39 |     1019 | 2024-06-06 | Astralis          | L   | 0.880      | -            | -                | -                | -         |   -19.27 | 910, bLitz, mzinho, Senzu, Techno |
|           38 |     1033 | 2024-06-06 | Ninjas in Pyjamas | W   | 0.879      | 0.715        | 0.287 (0.181)    | 0.537 (0.338)    | 1 (0.879) |     4.98 | 910, bLitz, mzinho, Senzu, Techno |
|           37 |     1051 | 2024-06-06 | HEROIC            | W   | 0.877      | 0.715        | 0.272 (0.171)    | 0.404 (0.253)    | 1 (0.877) |     5.05 | 910, bLitz, mzinho, Senzu, Techno |
|           36 |     1086 | 2024-06-05 | ENCE              | W   | 0.873      | -            | -                | -                | 1 (0.873) |     1.10 | 910, bLitz, mzinho, Senzu, Techno |
|           35 |     1098 | 2024-06-05 | Sashi             | W   | 0.871      | 0.715        | 0.234 (0.146)    | 1.000 (0.623)    | -         |     0.67 | 910, bLitz, mzinho, Senzu, Techno |
|           34 |     1179 | 2024-06-02 | BLEED             | W   | 0.852      | -            | -                | -                | -         |     0.92 | 910, bLitz, mzinho, Senzu, Techno |
|           33 |     1218 | 2024-06-01 | BLEED             | W   | 0.845      | -            | -                | -                | -         |     0.82 | 910, bLitz, mzinho, Senzu, Techno |
|           32 |     1297 | 2024-05-29 | Aurora            | W   | 0.825      | 0.500        | 0.423 (0.174)    | 0.783 (0.323)    | -         |     2.90 | 910, bLitz, mzinho, Senzu, Techno |
|           31 |     1318 | 2024-05-28 | Gaimin Gladiators | W   | 0.818      | -            | -                | -                | -         |     0.27 | 910, bLitz, mzinho, Senzu, Techno |
|           30 |     1591 | 2024-05-18 | ATOX              | W   | 0.751      | -            | -                | -                | -         |     0.11 | 910, bLitz, mzinho, Senzu, Techno |
|           29 |     1627 | 2024-05-17 | Chinggis Warriors | W   | 0.744      | -            | -                | -                | -         |     0.04 | 910, bLitz, mzinho, Senzu, Techno |
|           28 |     1895 | 2024-05-08 | Virtus.pro        | L   | 0.687      | -            | -                | -                | -         |   -13.84 | 910, bLitz, mzinho, Senzu, Techno |
|           27 |     2106 | 2024-04-28 | Vitality          | L   | 0.618      | -            | -                | -                | -         |    -9.77 | 910, bLitz, mzinho, Senzu, Techno |
|           26 |     2183 | 2024-04-25 | G2                | W   | 0.598      | 0.889        | 1.000 (0.532)    | 0.515 (0.274)    | -         |    11.79 | 910, bLitz, mzinho, Senzu, Techno |
|           25 |     2201 | 2024-04-24 | Falcons           | W   | 0.592      | 0.889        | 0.276 (0.145)    | -                | -         |     1.53 | 910, bLitz, mzinho, Senzu, Techno |
|           24 |     2326 | 2024-04-19 | Rare Atom         | W   | 0.560      | -            | -                | -                | -         |     0.02 | 910, bLitz, mzinho, Senzu, Techno |
|           23 |     2376 | 2024-04-18 | TYLOO             | W   | 0.552      | -            | -                | -                | -         |     0.04 | 910, bLitz, mzinho, Senzu, Techno |
|           22 |     2386 | 2024-04-18 | Rare Atom         | W   | 0.552      | -            | -                | -                | -         |     0.02 | 910, bLitz, mzinho, Senzu, Techno |
|           21 |     2813 | 2024-04-03 | Lynn Vision       | W   | 0.452      | -            | -                | -                | -         |     0.15 | 910, bLitz, mzinho, Senzu, Techno |
|           20 |     2827 | 2024-04-03 | LYG               | W   | 0.451      | -            | -                | -                | -         |     0.03 | 910, bLitz, mzinho, Senzu, Techno |
|           19 |     2855 | 2024-04-02 | ATOX              | W   | 0.445      | -            | -                | -                | -         |     0.06 | 910, bLitz, mzinho, Senzu, Techno |
|           18 |     2859 | 2024-04-02 | LYG               | L   | 0.445      | -            | -                | -                | -         |   -13.98 | 910, bLitz, mzinho, Senzu, Techno |
|           17 |     3007 | 2024-03-22 | paiN              | L   | 0.373      | -            | -                | -                | -         |   -10.66 | 910, bLitz, mzinho, Senzu, Techno |
|           16 |     3029 | 2024-03-21 | Vitality          | L   | 0.366      | -            | -                | -                | -         |    -6.19 | 910, bLitz, mzinho, Senzu, Techno |
|           15 |     3040 | 2024-03-21 | Natus Vincere     | L   | 0.365      | -            | -                | -                | -         |    -4.19 | 910, bLitz, mzinho, Senzu, Techno |
|           14 |     3059 | 2024-03-20 | Legacy            | W   | 0.359      | -            | -                | -                | -         |     0.10 | 910, bLitz, mzinho, Senzu, Techno |
|           13 |     3076 | 2024-03-19 | Lynn Vision       | W   | 0.352      | -            | -                | -                | -         |     0.09 | 910, bLitz, mzinho, Senzu, Techno |
|           12 |     3082 | 2024-03-18 | AMKAL             | W   | 0.346      | -            | -                | -                | -         |     0.11 | 910, bLitz, mzinho, Senzu, Techno |
|           11 |     3105 | 2024-03-17 | Gaimin Gladiators | L   | 0.340      | -            | -                | -                | -         |   -10.63 | 910, bLitz, mzinho, Senzu, Techno |
|           10 |     3117 | 2024-03-17 | Eternal Fire      | L   | 0.338      | -            | -                | -                | -         |    -8.60 | 910, bLitz, mzinho, Senzu, Techno |
|            9 |     3550 | 2024-02-27 | Lynn Vision       | W   | 0.216      | -            | -                | -                | -         |     0.05 | 910, bLitz, mzinho, Senzu, Techno |
|            8 |     3586 | 2024-02-25 | FlyQuest          | W   | 0.203      | -            | -                | -                | -         |     0.14 | 910, bLitz, mzinho, Senzu, Techno |
|            7 |     3592 | 2024-02-25 | MAG               | W   | 0.202      | -            | -                | -                | -         |     0.00 | 910, bLitz, mzinho, Senzu, Techno |
|            6 |     4076 | 2024-02-02 | ENCE              | L   | 0.047      | -            | -                | -                | -         |    -1.39 | 910, bLitz, mzinho, Senzu, Techno |
|            5 |     4116 | 2024-02-01 | Spirit            | L   | 0.039      | -            | -                | -                | -         |    -0.62 | 910, bLitz, mzinho, Senzu, Techno |
|            4 |     4127 | 2024-01-31 | FURIA             | W   | 0.033      | -            | -                | -                | -         |     0.36 | 910, bLitz, mzinho, Senzu, Techno |
|            3 |     4174 | 2024-01-28 | Lynn Vision       | W   | 0.012      | -            | -                | -                | -         |     0.00 | 910, bLitz, mzinho, Senzu, Techno |
|            2 |     4176 | 2024-01-28 | NKT               | W   | 0.011      | -            | -                | -                | -         |     0.00 | 910, bLitz, mzinho, Senzu, Techno |
|            1 |     4186 | 2024-01-27 | TYLOO             | L   | 0.006      | -            | -                | -                | -         |    -0.18 | 910, bLitz, mzinho, Senzu, Techno |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($276,334.18)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (1.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-21 |      1.000 | $25,000.00     | $25,000.00      |
| 2024-06-16 |      0.946 | $3,000.00      | $2,837.52       |
| 2024-06-09 |      0.900 | $200,000.00    | $179,949.35     |
| 2024-06-02 |      0.852 | $50,000.00     | $42,609.00      |
| 2024-05-12 |      0.713 | $23,500.00     | $16,755.97      |
| 2024-03-31 |      0.434 | $20,000.00     | $8,676.06       |
| 2024-02-02 |      0.048 | $4,500.00      | $214.44         |
| 2024-01-28 |      0.012 | $25,000.00     | $291.84         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
