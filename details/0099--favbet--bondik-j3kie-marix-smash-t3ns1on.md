### Roster Details<br />
Team Name: FAVBET<br />
Roster: bondik, j3kie, Marix, Smash, t3ns1on<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [99](../standings_global.md)<br />
Regional Rank: [71]( ../standings_europe.md)<br />
Final Rank Value:  907.2<br />
<br />
Final Rank Value (907.2) = Starting Rank Value (799.4) + Head To Head Adjustments (107.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.307[<sup>1</sup>](#table2)
- Bounty Collected: 0.358[<sup>2</sup>](#table1)
- Opponent Network: 0.080[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.186<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 799.4
- 400 + ( ( 0.186 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 799.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           25 |       60 | 2024-07-16 | ECLOT             | W   | 1.000      | 0.143        | 0.103 (0.015)    | 0.551 (0.079)    | 0 (0.000) |    24.49 | bondik, j3kie, Marix, Smash, t3ns1on    |
|           24 |      316 | 2024-06-16 | Zero Tenacity     | L   | 0.994      | -            | -                | -                | -         |    -7.05 | bondik, guthriee, j3kie, Smash, t3ns1on |
|           23 |      346 | 2024-06-15 | 9INE              | W   | 0.987      | -            | -                | -                | 0 (0.000) |     4.51 | bondik, guthriee, j3kie, Smash, t3ns1on |
|           22 |      382 | 2024-06-14 | ARCRED            | L   | 0.981      | -            | -                | -                | -         |   -11.73 | bondik, guthriee, j3kie, Smash, t3ns1on |
|           21 |      451 | 2024-06-12 | Nemiga            | W   | 0.967      | 0.143        | 0.498 (0.069)    | 0.725 (0.100)    | 0 (0.000) |    26.77 | bondik, guthriee, j3kie, Smash, t3ns1on |
|           20 |      475 | 2024-06-11 | Nexus             | W   | 0.961      | 0.143        | 0.011 (0.001)    | 0.432 (0.059)    | 0 (0.000) |    10.75 | bondik, guthriee, j3kie, Smash, t3ns1on |
|           19 |      712 | 2024-06-06 | Zero Tenacity     | L   | 0.928      | -            | -                | -                | -         |    -4.91 | bondik, guthriee, j3kie, Smash, t3ns1on |
|           18 |      739 | 2024-06-06 | 1WIN              | W   | 0.927      | 0.372        | 0.041 (0.014)    | 0.545 (0.188)    | 0 (0.000) |    21.78 | bondik, guthriee, j3kie, Smash, t3ns1on |
|           17 |      844 | 2024-06-04 | RUSTEC            | W   | 0.913      | -            | -                | -                | 0 (0.000) |     2.37 | bondik, guthriee, j3kie, Smash, t3ns1on |
|           16 |      894 | 2024-06-02 | JANO              | W   | 0.899      | 0.372        | 0.002 (0.001)    | 0.061 (0.021)    | 0 (0.000) |     9.23 | bondik, guthriee, j3kie, Smash, t3ns1on |
|           15 |      955 | 2024-05-31 | Sangal            | L   | 0.887      | -            | -                | -                | -         |    -4.23 | bondik, guthriee, j3kie, Smash, t3ns1on |
|           14 |      961 | 2024-05-31 | SAW               | L   | 0.886      | -            | -                | -                | -         |    -1.95 | bondik, guthriee, j3kie, Smash, t3ns1on |
|           13 |      974 | 2024-05-30 | ARCRED            | L   | 0.881      | -            | -                | -                | -         |   -10.97 | bondik, guthriee, j3kie, Smash, t3ns1on |
|           12 |     1004 | 2024-05-29 | Aurora Young Blud | W   | 0.874      | 0.372        | 0.005 (0.002)    | 0.388 (0.126)    | 0 (0.000) |    11.14 | bondik, guthriee, j3kie, Smash, t3ns1on |
|           11 |     1573 | 2024-05-10 | Johnny Speeds     | L   | 0.745      | -            | -                | -                | -         |    -1.08 | bondik, guthriee, j3kie, Smash, t3ns1on |
|           10 |     2523 | 2024-04-03 | Metizport         | L   | 0.500      | -            | -                | -                | -         |    -4.60 | bondik, guthriee, j3kie, Smash, t3ns1on |
|            9 |     2556 | 2024-04-02 | Ninjas in Pyjamas | L   | 0.494      | -            | -                | -                | -         |    -0.06 | bondik, guthriee, j3kie, Smash, t3ns1on |
|            8 |     2560 | 2024-04-02 | GamerLegion       | W   | 0.493      | 0.143        | 0.244 (0.017)    | 0.333 (0.023)    | 0 (0.000) |    14.27 | bondik, guthriee, j3kie, Smash, t3ns1on |
|            7 |     2587 | 2024-03-31 | Passion UA        | W   | 0.480      | 0.276        | 0.087 (0.012)    | 0.847 (0.112)    | 0 (0.000) |    10.85 | bondik, guthriee, j3kie, Smash, t3ns1on |
|            6 |     2592 | 2024-03-30 | L&G               | W   | 0.473      | -            | -                | -                | -         |     2.44 | bondik, guthriee, j3kie, Smash, t3ns1on |
|            5 |     2648 | 2024-03-27 | ALTERNATE aTTaX   | W   | 0.455      | 0.143        | 0.050 (0.003)    | 0.644 (0.042)    | -         |    11.33 | bondik, guthriee, j3kie, Smash, t3ns1on |
|            4 |     2658 | 2024-03-27 | BetBoom           | W   | 0.454      | 0.143        | 0.403 (0.026)    | 0.704 (0.046)    | -         |    14.14 | bondik, guthriee, j3kie, Smash, t3ns1on |
|            3 |     2993 | 2024-03-10 | AURA              | L   | 0.341      | -            | -                | -                | -         |    -8.89 | bondik, guthriee, j3kie, Smash, t3ns1on |
|            2 |     3039 | 2024-03-08 | Nexus             | L   | 0.327      | -            | -                | -                | -         |    -4.32 | bondik, guthriee, j3kie, Smash, t3ns1on |
|            1 |     3095 | 2024-03-06 | CYBERSHOKE        | W   | 0.314      | -            | -                | -                | -         |     3.57 | bondik, guthriee, j3kie, Smash, t3ns1on |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,346.97)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-10 |      0.955 | $750.00        | $715.99         |
| 2024-03-31 |      0.480 | $1,315.00      | $630.98         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
