### Roster Details<br />
Team Name: USA<br />
Roster: CoJoMo, Gabe, Louie, mason, mds<br />
Global Rank: [219](../../standings_global_2025_01_27.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_01_27.md)<br />
Regional Rank: [68]( ../../standings_americas_2025_01_27.md)<br />
<br />
Final Rank Value:  458.8<br />
<br />
Final Rank Value (458.8) = Starting Rank Value (482.8) + Head To Head Adjustments (-24.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.169[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.042<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 482.8
- 400 + ( ( 0.042 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 482.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           16 |      991 | 2024-11-15 | Nexus             | L   | 0.713      | -            | -                | -                | -         |    -0.20 | CoJoMo, Gabe, Louie, mason, mds           |
|           15 |      995 | 2024-11-15 | kONO              | L   | 0.713      | -            | -                | -                | -         |    -1.76 | CoJoMo, Gabe, Louie, mason, mds           |
|           14 |     1031 | 2024-11-14 | QPT               | L   | 0.707      | -            | -                | -                | -         |    -0.41 | CoJoMo, Gabe, Louie, mason, mds           |
|           13 |     1036 | 2024-11-14 | Tunisia           | L   | 0.706      | -            | -                | -                | -         |    -4.69 | CoJoMo, Gabe, Louie, mason, mds           |
|           12 |     1039 | 2024-11-14 | Latvia            | L   | 0.706      | -            | -                | -                | -         |    -5.02 | CoJoMo, Gabe, Louie, mason, mds           |
|           11 |     1560 | 2024-10-19 | Fisher College    | L   | 0.536      | -            | -                | -                | -         |    -1.68 | CoJoMo, Gabe, mds, Outback, REKMEISTER    |
|           10 |     2395 | 2024-09-22 | Lore              | L   | 0.354      | -            | -                | -                | -         |    -6.76 | CoJoMo, Gabe, mds, shutout, YuZ           |
|            9 |     2440 | 2024-09-20 | Final Form        | L   | 0.342      | -            | -                | -                | -         |    -3.66 | CoJoMo, Gabe, mds, shutout, YuZ           |
|            8 |     2567 | 2024-09-16 | undefined         | L   | 0.315      | -            | -                | -                | -         |    -2.58 | CoJoMo, CooperTrooper, Gabe, mds, shutout |
|            7 |     2654 | 2024-09-13 | What’s for dinner | W   | 0.296      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.60 | CoJoMo, CooperTrooper, Gabe, mds, shutout |
|            6 |     3230 | 2024-08-26 | FLUFFY AIMERS     | L   | 0.176      | -            | -                | -                | -         |    -0.46 | CoJoMo, Gabe, Louie, mds, shutout         |
|            5 |     3245 | 2024-08-26 | Party Astronauts  | L   | 0.174      | -            | -                | -                | -         |    -1.28 | CoJoMo, Gabe, Louie, mds, shutout         |
|            4 |     3611 | 2024-08-15 | Party Astronauts  | L   | 0.102      | -            | -                | -                | -         |    -0.79 | CoJoMo, Gabe, Louie, mds, shutout         |
|            3 |     3756 | 2024-08-11 | Chill Guys        | W   | 0.076      | 0.371        | 0.004 (0.000)    | 0.170 (0.005)    | 0 (0.000) |     1.83 | CoJoMo, Gabe, Louie, mds, shutout         |
|            2 |     3829 | 2024-08-08 | undefined         | L   | 0.056      | -            | -                | -                | -         |    -0.47 | CoJoMo, CooperTrooper, Gabe, mds, shutout |
|            1 |     4007 | 2024-08-03 | DETONATE          | W   | 0.023      | 0.371        | 0.000 (0.000)    | 0.024 (0.000)    | 0 (0.000) |     0.35 | CoJoMo, CooperTrooper, Gabe, mds, shutout |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($204,341.08)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
