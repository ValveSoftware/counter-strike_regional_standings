### Roster Details<br />
Team Name: BC.Game<br />
Roster: CYPHER, jkaem, nawwk, nexa, pr1metapz<br />
Global Rank: [178](../../standings_global_2025_10_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_10_06.md)<br />
Regional Rank: [106]( ../../standings_europe_2025_10_06.md)<br />
<br />
Final Rank Value:  620.8<br />
<br />
Final Rank Value (620.8) = Starting Rank Value (620.3) + Head To Head Adjustments (0.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.231[<sup>1</sup>](#table2)
- Bounty Collected: 0.217[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.112<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 620.3
- 400 + ( ( 0.112 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 620.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |     3579 | 2025-04-25 | Partizan  | L   | 0.105      | -            | -                | -                | -         |    -0.11 | CYPHER, jkaem, nawwk, nexa, pr1metapz |
|            6 |     3592 | 2025-04-24 | HEROIC    | L   | 0.099      | -            | -                | -                | -         |    -0.05 | CYPHER, jkaem, nawwk, nexa, pr1metapz |
|            5 |     3746 | 2025-04-16 | B8        | L   | 0.045      | -            | -                | -                | -         |    -0.01 | CYPHER, jkaem, nawwk, nexa, pr1metapz |
|            4 |     3766 | 2025-04-15 | BIG       | L   | 0.039      | -            | -                | -                | -         |    -0.01 | CYPHER, jkaem, nawwk, nexa, pr1metapz |
|            3 |     3780 | 2025-04-14 | Metizport | L   | 0.033      | -            | -                | -                | -         |    -0.26 | CYPHER, jkaem, nawwk, nexa, pr1metapz |
|            2 |     3788 | 2025-04-14 | fnatic    | W   | 0.032      | 0.525        | 0.146 (0.002)    | 0.891 (0.015)    | 0 (0.000) |     1.00 | CYPHER, jkaem, nawwk, nexa, pr1metapz |
|            1 |     3820 | 2025-04-12 | BetBoom   | L   | 0.020      | -            | -                | -                | -         |    -0.01 | CYPHER, jkaem, nawwk, nexa, pr1metapz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($180.58)
- Divide that value by the 5th highest value among all rosters ($380,085.28)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-04-27 |      0.120 | $1,500.00      | $180.58         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
