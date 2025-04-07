### Roster Details<br />
Team Name: Chicken Coop<br />
Roster: BAGEL, BiNoX, FRIZZY, LittleBEER, taggy<br />
Global Rank: [172](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_04_07.md)<br />
Regional Rank: [43]( ../../standings_americas_2025_04_07.md)<br />
<br />
Final Rank Value:  635.1<br />
<br />
Final Rank Value (635.1) = Starting Rank Value (636.1) + Head To Head Adjustments (-1.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.302[<sup>1</sup>](#table2)
- Bounty Collected: 0.205[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.128<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 636.1
- 400 + ( ( 0.128 - 0.000 ) / ( 0.869 - 0.000 ) ) * 1600 = 636.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |      101 | 2025-03-30 | MIGHT              | L   | 1.000      | -            | -                | -                | -         |   -11.97 | BAGEL, BiNoX, FRIZZY, LittleBEER, taggy |
|           13 |      127 | 2025-03-29 | Hooligangsters     | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.108 (0.015)    | 0 (0.000) |    10.44 | BAGEL, BiNoX, FRIZZY, LittleBEER, taggy |
|           12 |      138 | 2025-03-29 | LL                 | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.054 (0.008)    | 0 (0.000) |    10.25 | BAGEL, BiNoX, FRIZZY, LittleBEER, taggy |
|           11 |      196 | 2025-03-28 | Wildcard           | L   | 1.000      | -            | -                | -                | -         |    -2.13 | BAGEL, BiNoX, FRIZZY, LittleBEER, taggy |
|           10 |      270 | 2025-03-27 | FlyQuest RED       | W   | 1.000      | 0.143        | 0.004 (0.001)    | 0.003 (0.000)    | 0 (0.000) |    13.12 | BAGEL, BiNoX, FRIZZY, LittleBEER, taggy |
|            9 |     1312 | 2025-02-10 | MIGHT              | L   | 0.828      | -            | -                | -                | -         |    -9.05 | BAGEL, BiNoX, FRIZZY, LittleBEER, taggy |
|            8 |     1353 | 2025-02-09 | Party Astronauts   | L   | 0.821      | -            | -                | -                | -         |   -10.55 | BAGEL, BiNoX, FRIZZY, LittleBEER, taggy |
|            7 |     1389 | 2025-02-08 | LAG                | W   | 0.815      | 0.143        | 0.004 (0.000)    | 0.209 (0.024)    | 0 (0.000) |    15.85 | BAGEL, BiNoX, FRIZZY, LittleBEER, taggy |
|            6 |     1880 | 2024-12-12 | Bad News Capybaras | L   | 0.430      | -            | -                | -                | -         |    -7.11 | BAGEL, Freaky, FRIZZY, LittleBEER, supa |
|            5 |     1896 | 2024-12-11 | InControl          | W   | 0.422      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.91 | BAGEL, Freaky, FRIZZY, LittleBEER, supa |
|            4 |     1908 | 2024-12-10 | Bad News Capybaras | L   | 0.416      | -            | -                | -                | -         |    -7.00 | BAGEL, Freaky, FRIZZY, LittleBEER, supa |
|            3 |     1953 | 2024-12-07 | SUPER EVIL GANG    | L   | 0.397      | -            | -                | -                | -         |    -5.59 | BAGEL, Freaky, FRIZZY, LittleBEER, supa |
|            2 |     2064 | 2024-12-03 | Aetheris           | L   | 0.370      | -            | -                | -                | -         |    -5.43 | BAGEL, Freaky, FRIZZY, LittleBEER, supa |
|            1 |     2083 | 2024-12-02 | MCS                | W   | 0.363      | 0.372        | 0.002 (0.000)    | 0.097 (0.013)    | 0 (0.000) |     5.24 | BAGEL, Freaky, FRIZZY, LittleBEER, supa |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,330.88)
- Divide that value by the 5th highest value among all rosters ($274,489.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-08 |      0.403 | $3,300.00      | $1,330.88       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
