### Roster Details<br />
Team Name: Phoenix<br />
Roster: Gabe, H0NeST, jchancE, mds, REKMEISTER<br />
Global Rank: [182](../../standings_global_2025_12_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_12_01.md)<br />
Regional Rank: [46]( ../../standings_americas_2025_12_01.md)<br />
<br />
Final Rank Value:  683.2<br />
<br />
Final Rank Value (683.2) = Starting Rank Value (738.5) + Head To Head Adjustments (-55.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.285[<sup>1</sup>](#table2)
- Bounty Collected: 0.290[<sup>2</sup>](#table1)
- Opponent Network: 0.076[<sup>2</sup>](#table1)
- LAN Wins: 0.060[<sup>2</sup>](#table1)

The average of these factors is 0.178<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 738.5
- 400 + ( ( 0.178 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 738.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           41 |      308 | 2025-11-15 | Voca            | L   | 1.000      | -            | -                | -                | -         |    -5.90 | Gabe, H0NeST, jchancE, mds, Valter0k   |
|           40 |      548 | 2025-11-07 | SportsBetExpert | L   | 1.000      | -            | -                | -                | -         |   -15.25 | Gabe, H0NeST, jchancE, mds, REKMEISTER |
|           39 |      913 | 2025-10-27 | OverKnight      | L   | 0.970      | -            | -                | -                | -         |   -14.63 | Gabe, H0NeST, jchancE, mds, REKMEISTER |
|           38 |      953 | 2025-10-26 | Marsborne       | L   | 0.963      | -            | -                | -                | -         |    -3.16 | Gabe, H0NeST, jchancE, mds, REKMEISTER |
|           37 |     1064 | 2025-10-24 | FlyQuest RED    | W   | 0.949      | 0.363        | 0.014 (0.005)    | 0.346 (0.119)    | 0 (0.000) |    16.69 | Gabe, H0NeST, jchancE, mds, REKMEISTER |
|           36 |     1129 | 2025-10-23 | InControl       | L   | 0.943      | -            | -                | -                | -         |   -16.50 | Gabe, H0NeST, jchancE, mds, REKMEISTER |
|           35 |     1196 | 2025-10-21 | Money Crew      | L   | 0.929      | -            | -                | -                | -         |   -18.90 | Gabe, H0NeST, jchancE, mds, REKMEISTER |
|           34 |     1292 | 2025-10-16 | LAG             | L   | 0.896      | -            | -                | -                | -         |   -13.94 | Gabe, H0NeST, jchancE, mds, REKMEISTER |
|           33 |     1364 | 2025-10-14 | BOSS            | L   | 0.883      | -            | -                | -                | -         |   -12.53 | Gabe, jchancE, mds, Redman, REKMEISTER |
|           32 |     1397 | 2025-10-13 | Zomblers        | W   | 0.876      | 0.333        | 0.001 (0.000)    | 0.316 (0.092)    | 0 (0.000) |    11.41 | Gabe, H0NeST, jchancE, mds, REKMEISTER |
|           31 |     1491 | 2025-10-09 | Take Flyte      | W   | 0.849      | 0.363        | -                | 0.269 (0.083)    | 0 (0.000) |     8.92 | Gabe, jchancE, mds, Redman, REKMEISTER |
|           30 |     1539 | 2025-10-08 | Wildcard        | L   | 0.842      | -            | -                | -                | -         |    -5.18 | Gabe, jchancE, mds, Redman, REKMEISTER |
|           29 |     1544 | 2025-10-08 | Voca            | L   | 0.842      | -            | -                | -                | -         |    -8.76 | Gabe, H0NeST, jchancE, mds, REKMEISTER |
|           28 |     1600 | 2025-10-07 | Zomblers        | W   | 0.835      | 0.333        | 0.001 (0.000)    | 0.316 (0.088)    | 0 (0.000) |    11.53 | Gabe, H0NeST, jchancE, mds, REKMEISTER |
|           27 |     1649 | 2025-10-06 | Sakura          | W   | 0.829      | 0.363        | 0.046 (0.014)    | 0.350 (0.105)    | 0 (0.000) |    15.37 | Gabe, jchancE, mds, Redman, REKMEISTER |
|           26 |     1655 | 2025-10-06 | InControl       | W   | 0.829      | 0.333        | 0.001 (0.000)    | 0.199 (0.055)    | 0 (0.000) |    12.73 | Gabe, H0NeST, jchancE, mds, REKMEISTER |
|           25 |     2662 | 2025-09-10 | NYX             | L   | 0.655      | -            | -                | -                | -         |   -16.54 | cbass, Gabe, jchancE, mds, REKMEISTER  |
|           24 |     2714 | 2025-09-09 | Outfit 49       | L   | 0.649      | -            | -                | -                | -         |   -15.81 | cbass, Gabe, jchancE, mds, REKMEISTER  |
|           23 |     2837 | 2025-09-06 | Marsborne       | L   | 0.627      | -            | -                | -                | -         |    -2.60 | cbass, Gabe, jchancE, mds, REKMEISTER  |
|           22 |     3019 | 2025-08-28 | Marsborne       | L   | 0.569      | -            | -                | -                | -         |    -2.29 | cbass, Gabe, jchancE, mds, REKMEISTER  |
|           21 |     3105 | 2025-08-24 | TSG             | W   | 0.542      | -            | -                | -                | 0 (0.000) |     4.11 | cbass, Gabe, jchancE, mds, REKMEISTER  |
|           20 |     3120 | 2025-08-23 | Voca            | L   | 0.536      | -            | -                | -                | -         |    -6.69 | cbass, Gabe, jchancE, mds, REKMEISTER  |
|           19 |     3151 | 2025-08-21 | OverKnight      | W   | 0.522      | 0.333        | -                | 0.356 (0.062)    | 0 (0.000) |     6.71 | cbass, Gabe, jchancE, mds, REKMEISTER  |
|           18 |     3204 | 2025-08-19 | Marsborne       | L   | 0.509      | -            | -                | -                | -         |    -1.87 | cbass, Gabe, jchancE, mds, REKMEISTER  |
|           17 |     3240 | 2025-08-17 | Aether          | W   | 0.495      | 0.333        | 0.001 (0.000)    | -                | -         |     5.80 | cbass, Gabe, jchancE, mds, REKMEISTER  |
|           16 |     3311 | 2025-08-15 | BOSS            | L   | 0.482      | -            | -                | -                | -         |    -7.31 | cbass, Gabe, jchancE, mds, REKMEISTER  |
|           15 |     3364 | 2025-08-14 | Mythic          | W   | 0.476      | 0.363        | 0.002 (0.000)    | -                | -         |     5.96 | cbass, Gabe, jchancE, mds, REKMEISTER  |
|           14 |     3404 | 2025-08-13 | Sakura          | W   | 0.470      | 0.363        | 0.046 (0.008)    | 0.350 (0.060)    | -         |     9.72 | cbass, Gabe, jchancE, mds, REKMEISTER  |
|           13 |     3465 | 2025-08-12 | Wildcard        | L   | 0.462      | -            | -                | -                | -         |    -3.02 | cbass, Gabe, jchancE, mds, REKMEISTER  |
|           12 |     3510 | 2025-08-11 | regain          | L   | 0.456      | -            | -                | -                | -         |    -8.19 | cbass, Gabe, jchancE, mds, REKMEISTER  |
|           11 |     3524 | 2025-08-11 | Zomblers        | W   | 0.454      | 0.333        | 0.001 (0.000)    | 0.316 (0.048)    | -         |     5.93 | cbass, Gabe, jchancE, mds, REKMEISTER  |
|           10 |     3593 | 2025-08-09 | SkinRave        | L   | 0.443      | -            | -                | -                | -         |    -3.40 | cbass, Gabe, jchancE, mds, REKMEISTER  |
|            9 |     3612 | 2025-08-08 | Sakura          | W   | 0.436      | 0.333        | 0.046 (0.007)    | 0.350 (0.051)    | -         |     9.55 | cbass, Gabe, jchancE, mds, REKMEISTER  |
|            8 |     3755 | 2025-07-29 | M80             | L   | 0.368      | -            | -                | -                | -         |    -0.32 | cbass, Gabe, jchancE, mds, REKMEISTER  |
|            7 |     3831 | 2025-07-26 | Aether          | W   | 0.349      | -            | -                | -                | -         |     2.63 | cbass, Gabe, jchancE, mds, REKMEISTER  |
|            6 |     3853 | 2025-07-25 | Arrival Seven   | W   | 0.341      | -            | -                | -                | -         |     2.55 | cbass, Gabe, jchancE, mds, REKMEISTER  |
|            5 |     3930 | 2025-07-19 | M80             | L   | 0.300      | -            | -                | -                | -         |    -0.26 | cbass, Gabe, jchancE, mds, REKMEISTER  |
|            4 |     3939 | 2025-07-19 | Zomblers        | W   | 0.300      | -            | -                | -                | 1 (0.300) |     2.04 | cbass, Gabe, jchancE, mds, REKMEISTER  |
|            3 |     3953 | 2025-07-18 | Betclic         | L   | 0.296      | -            | -                | -                | -         |    -1.94 | cbass, Gabe, jchancE, mds, REKMEISTER  |
|            2 |     3955 | 2025-07-18 | Zomblers        | W   | 0.296      | -            | -                | -                | 1 (0.296) |     4.11 | cbass, Gabe, jchancE, mds, REKMEISTER  |
|            1 |     4120 | 2025-07-11 | Arrival Seven   | L   | 0.250      | -            | -                | -                | -         |    -6.01 | cbass, Gabe, Grave, jchancE, mds       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,804.53)
- Divide that value by the 5th highest value among all rosters ($574,782.45)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-10-08 |      0.842 | $2,000.00      | $1,683.98       |
| 2025-08-15 |      0.482 | $250.00        | $120.54         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
