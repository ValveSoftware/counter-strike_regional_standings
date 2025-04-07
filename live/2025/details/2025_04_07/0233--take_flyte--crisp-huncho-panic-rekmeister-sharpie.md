### Roster Details<br />
Team Name: Take Flyte<br />
Roster: Crisp, huncho, Panic, REKMEISTER, Sharpie<br />
Global Rank: [233](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_04_07.md)<br />
Regional Rank: [71]( ../../standings_americas_2025_04_07.md)<br />
<br />
Final Rank Value:  544.6<br />
<br />
Final Rank Value (544.6) = Starting Rank Value (543.1) + Head To Head Adjustments (1.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.207[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.102[<sup>2</sup>](#table1)

The average of these factors is 0.078<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 543.1
- 400 + ( ( 0.078 - 0.000 ) / ( 0.869 - 0.000 ) ) * 1600 = 543.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |      730 | 2025-03-07 | Immigrants peek  | L   | 0.995      | -            | -                | -                | -         |   -12.40 | Crisp, huncho, Panic, REKMEISTER, Sharpie |
|            6 |      777 | 2025-03-06 | Complexity       | L   | 0.989      | -            | -                | -                | -         |    -2.16 | Crisp, huncho, Panic, REKMEISTER, Sharpie |
|            5 |      818 | 2025-03-05 | Aetheris         | W   | 0.982      | 0.143        | 0.010 (0.001)    | 0.168 (0.024)    | 0 (0.000) |    20.26 | Crisp, huncho, Panic, REKMEISTER, Sharpie |
|            4 |      899 | 2025-03-01 | Getting Info     | L   | 0.956      | -            | -                | -                | -         |    -5.34 | Crisp, huncho, Panic, REKMEISTER, Sharpie |
|            3 |      903 | 2025-03-01 | Graveyard Shift  | W   | 0.956      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.956) |     9.30 | Crisp, huncho, Panic, REKMEISTER, Sharpie |
|            2 |     1964 | 2024-12-07 | Fisher College   | L   | 0.394      | -            | -                | -                | -         |    -4.11 | Crisp, huncho, Jpp, Orb1t, Sharpie        |
|            1 |     1991 | 2024-12-06 | Party Astronauts | L   | 0.390      | -            | -                | -                | -         |    -4.13 | Crisp, huncho, Jpp, Orb1t, Sharpie        |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($274,489.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
