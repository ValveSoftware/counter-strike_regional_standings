### Roster Details<br />
Team Name: The MongolZ<br />
Roster: 910, bLitz, mzinho, Senzu, Techno<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [8](../standings_global.md)<br />
Regional Rank: [1]( ../standings_asia.md)<br />
Final Rank Value:  1794.4<br />
<br />
Final Rank Value (1794.4) = Starting Rank Value (1980.1) + Head To Head Adjustments (-185.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 1.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.608[<sup>2</sup>](#table1)
- Opponent Network: 0.335[<sup>2</sup>](#table1)
- LAN Wins: 1.000[<sup>2</sup>](#table1)

The average of these factors is 0.736<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1980.1
- 400 + ( ( 0.736 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 1980.1


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
|           53 |        9 | 2024-07-17 | G2                | L   | 1.000      | -            | -                | -                | -         |    -9.39 | 910, bLitz, mzinho, Senzu, Techno |
|           52 |      168 | 2024-07-11 | CatEvil           | L   | 1.000      | -            | -                | -                | -         |   -31.46 | 910, bLitz, mzinho, Senzu, Techno |
|           51 |      172 | 2024-07-11 | Rare Atom         | L   | 1.000      | -            | -                | -                | -         |   -31.44 | 910, bLitz, mzinho, Senzu, Techno |
|           50 |      175 | 2024-07-11 | Steel Helmet      | W   | 1.000      | -            | -                | -                | -         |     0.04 | 910, bLitz, mzinho, Senzu, Techno |
|           49 |      356 | 2024-06-15 | Falcons           | L   | 0.987      | -            | -                | -                | -         |   -27.11 | 910, bLitz, mzinho, Senzu, Techno |
|           48 |      399 | 2024-06-14 | Aurora            | L   | 0.979      | -            | -                | -                | -         |   -29.15 | 910, bLitz, mzinho, Senzu, Techno |
|           47 |      410 | 2024-06-14 | Party Astronauts  | W   | 0.978      | 0.500        | -                | 0.604 (0.295)    | 1 (0.978) |     0.22 | 910, bLitz, mzinho, Senzu, Techno |
|           46 |      541 | 2024-06-09 | Ninjas in Pyjamas | W   | 0.947      | 0.715        | 0.343 (0.232)    | 0.534 (0.362)    | 1 (0.947) |     6.72 | 910, bLitz, mzinho, Senzu, Techno |
|           45 |      619 | 2024-06-08 | Astralis          | W   | 0.940      | 0.715        | 0.549 (0.369)    | 0.434 (0.292)    | 1 (0.940) |    12.67 | 910, bLitz, mzinho, Senzu, Techno |
|           44 |      731 | 2024-06-06 | Astralis          | L   | 0.927      | -            | -                | -                | -         |   -17.13 | 910, bLitz, mzinho, Senzu, Techno |
|           43 |      745 | 2024-06-06 | Ninjas in Pyjamas | W   | 0.926      | 0.715        | 0.343 (0.227)    | 0.534 (0.354)    | 1 (0.926) |     6.29 | 910, bLitz, mzinho, Senzu, Techno |
|           42 |      763 | 2024-06-06 | HEROIC            | W   | 0.924      | 0.715        | 0.333 (0.221)    | 0.448 (0.296)    | 1 (0.924) |     6.77 | 910, bLitz, mzinho, Senzu, Techno |
|           41 |      798 | 2024-06-05 | ENCE              | W   | 0.920      | 0.715        | 0.212 (0.140)    | 0.377 (0.248)    | 1 (0.920) |     1.10 | 910, bLitz, mzinho, Senzu, Techno |
|           40 |      810 | 2024-06-05 | Sashi             | W   | 0.918      | 0.715        | 0.215 (0.141)    | 1.000 (0.657)    | 1 (0.918) |     0.62 | 910, bLitz, mzinho, Senzu, Techno |
|           39 |      891 | 2024-06-02 | BLEED             | W   | 0.899      | 0.500        | 0.192 (0.086)    | -                | 1 (0.899) |     0.73 | 910, bLitz, mzinho, Senzu, Techno |
|           38 |      930 | 2024-06-01 | BLEED             | W   | 0.892      | -            | -                | -                | 1 (0.892) |     0.65 | 910, bLitz, mzinho, Senzu, Techno |
|           37 |     1009 | 2024-05-29 | Aurora            | W   | 0.872      | 0.500        | 0.514 (0.224)    | 0.813 (0.355)    | 1 (0.872) |     3.28 | 910, bLitz, mzinho, Senzu, Techno |
|           36 |     1030 | 2024-05-28 | Gaimin Gladiators | W   | 0.865      | 0.500        | -                | 0.488 (0.211)    | -         |     0.30 | 910, bLitz, mzinho, Senzu, Techno |
|           35 |     1303 | 2024-05-18 | ATOX              | W   | 0.798      | -            | -                | -                | -         |     0.12 | 910, bLitz, mzinho, Senzu, Techno |
|           34 |     1339 | 2024-05-17 | Chinggis Warriors | W   | 0.791      | -            | -                | -                | -         |     0.04 | 910, bLitz, mzinho, Senzu, Techno |
|           33 |     1607 | 2024-05-08 | Virtus.pro        | L   | 0.735      | -            | -                | -                | -         |   -17.02 | 910, bLitz, mzinho, Senzu, Techno |
|           32 |     1818 | 2024-04-28 | Vitality          | L   | 0.666      | -            | -                | -                | -         |    -8.74 | 910, bLitz, mzinho, Senzu, Techno |
|           31 |     1895 | 2024-04-25 | G2                | W   | 0.646      | 0.889        | 0.738 (0.424)    | 0.496 (0.285)    | -         |    10.94 | 910, bLitz, mzinho, Senzu, Techno |
|           30 |     1913 | 2024-04-24 | Falcons           | W   | 0.639      | 0.889        | 0.344 (0.196)    | -                | -         |     2.33 | 910, bLitz, mzinho, Senzu, Techno |
|           29 |     2038 | 2024-04-19 | Rare Atom         | W   | 0.607      | -            | -                | -                | -         |     0.02 | 910, bLitz, mzinho, Senzu, Techno |
|           28 |     2088 | 2024-04-18 | TYLOO             | W   | 0.600      | -            | -                | -                | -         |     0.05 | 910, bLitz, mzinho, Senzu, Techno |
|           27 |     2098 | 2024-04-18 | Rare Atom         | W   | 0.599      | -            | -                | -                | -         |     0.02 | 910, bLitz, mzinho, Senzu, Techno |
|           26 |     2525 | 2024-04-03 | Lynn Vision       | W   | 0.500      | -            | -                | -                | -         |     0.20 | 910, bLitz, mzinho, Senzu, Techno |
|           25 |     2539 | 2024-04-03 | LYG               | W   | 0.498      | -            | -                | -                | -         |     0.02 | 910, bLitz, mzinho, Senzu, Techno |
|           24 |     2567 | 2024-04-02 | ATOX              | W   | 0.493      | -            | -                | -                | -         |     0.07 | 910, bLitz, mzinho, Senzu, Techno |
|           23 |     2571 | 2024-04-02 | LYG               | L   | 0.492      | -            | -                | -                | -         |   -15.47 | 910, bLitz, mzinho, Senzu, Techno |
|           22 |     2719 | 2024-03-22 | paiN              | L   | 0.420      | -            | -                | -                | -         |   -11.69 | 910, bLitz, mzinho, Senzu, Techno |
|           21 |     2741 | 2024-03-21 | Vitality          | L   | 0.414      | -            | -                | -                | -         |    -5.90 | 910, bLitz, mzinho, Senzu, Techno |
|           20 |     2752 | 2024-03-21 | Natus Vincere     | L   | 0.412      | -            | -                | -                | -         |    -7.68 | 910, bLitz, mzinho, Senzu, Techno |
|           19 |     2771 | 2024-03-20 | Legacy            | W   | 0.406      | -            | -                | -                | -         |     0.12 | 910, bLitz, mzinho, Senzu, Techno |
|           18 |     2788 | 2024-03-19 | Lynn Vision       | W   | 0.399      | -            | -                | -                | -         |     0.12 | 910, bLitz, mzinho, Senzu, Techno |
|           17 |     2794 | 2024-03-18 | AMKAL             | W   | 0.393      | -            | -                | -                | -         |     0.10 | 910, bLitz, mzinho, Senzu, Techno |
|           16 |     2817 | 2024-03-17 | Gaimin Gladiators | L   | 0.387      | -            | -                | -                | -         |   -12.09 | 910, bLitz, mzinho, Senzu, Techno |
|           15 |     2829 | 2024-03-17 | Eternal Fire      | L   | 0.386      | -            | -                | -                | -         |    -9.77 | 910, bLitz, mzinho, Senzu, Techno |
|           14 |     3262 | 2024-02-27 | Lynn Vision       | W   | 0.263      | -            | -                | -                | -         |     0.07 | 910, bLitz, mzinho, Senzu, Techno |
|           13 |     3298 | 2024-02-25 | FlyQuest          | W   | 0.251      | -            | -                | -                | -         |     0.20 | 910, bLitz, mzinho, Senzu, Techno |
|           12 |     3304 | 2024-02-25 | MAG               | W   | 0.249      | -            | -                | -                | -         |     0.00 | 910, bLitz, mzinho, Senzu, Techno |
|           11 |     3788 | 2024-02-02 | ENCE              | L   | 0.094      | -            | -                | -                | -         |    -2.81 | 910, bLitz, mzinho, Senzu, Techno |
|           10 |     3828 | 2024-02-01 | Spirit            | L   | 0.086      | -            | -                | -                | -         |    -1.31 | 910, bLitz, mzinho, Senzu, Techno |
|            9 |     3839 | 2024-01-31 | FURIA             | W   | 0.081      | -            | -                | -                | -         |     0.35 | 910, bLitz, mzinho, Senzu, Techno |
|            8 |     3886 | 2024-01-28 | Lynn Vision       | W   | 0.059      | -            | -                | -                | -         |     0.01 | 910, bLitz, mzinho, Senzu, Techno |
|            7 |     3888 | 2024-01-28 | NKT               | W   | 0.058      | -            | -                | -                | -         |     0.00 | 910, bLitz, mzinho, Senzu, Techno |
|            6 |     3898 | 2024-01-27 | TYLOO             | L   | 0.053      | -            | -                | -                | -         |    -1.66 | 910, bLitz, mzinho, Senzu, Techno |
|            5 |     3916 | 2024-01-26 | TYLOO             | W   | 0.046      | -            | -                | -                | -         |     0.00 | 910, bLitz, mzinho, Senzu, Techno |
|            4 |     3923 | 2024-01-26 | The Huns          | W   | 0.045      | -            | -                | -                | -         |     0.00 | 910, bLitz, mzinho, Senzu, Techno |
|            3 |     3927 | 2024-01-26 | TYLOO             | W   | 0.044      | -            | -                | -                | -         |     0.00 | 910, bLitz, mzinho, Senzu, Techno |
|            2 |     3928 | 2024-01-25 | ACME              | W   | 0.044      | -            | -                | -                | -         |     0.00 | 910, bLitz, mzinho, Senzu, Techno |
|            1 |     4038 | 2024-01-21 | ATOX              | W   | 0.011      | -            | -                | -                | -         |     0.00 | 910, bLitz, mzinho, Senzu, Techno |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($266,729.58)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (1.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      0.993 | $3,000.00      | $2,979.19       |
| 2024-06-09 |      0.947 | $200,000.00    | $189,394.38     |
| 2024-06-02 |      0.899 | $50,000.00     | $44,970.25      |
| 2024-05-12 |      0.760 | $23,500.00     | $17,865.76      |
| 2024-03-31 |      0.481 | $20,000.00     | $9,620.56       |
| 2024-02-02 |      0.095 | $4,500.00      | $426.95         |
| 2024-01-28 |      0.059 | $25,000.00     | $1,472.47       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
