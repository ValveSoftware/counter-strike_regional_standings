### Roster Details<br />
Team Name: BC.Game<br />
Roster: CacaNito, CYPHER, nawwk, nexa, pr1metapz<br />
Global Rank: [157](../../standings_global_2025_11_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_11_03.md)<br />
Regional Rank: [101]( ../../standings_europe_2025_11_03.md)<br />
<br />
Final Rank Value:  678.3<br />
<br />
Final Rank Value (678.3) = Starting Rank Value (660.9) + Head To Head Adjustments (17.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.297[<sup>1</sup>](#table2)
- Bounty Collected: 0.240[<sup>2</sup>](#table1)
- Opponent Network: 0.020[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.139<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 660.9
- 400 + ( ( 0.139 - 0.000 ) / ( 0.853 - 0.000 ) ) * 1600 = 660.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |     3305 | 2025-06-22 | Gentle Mates | L   | 0.306      | -            | -                | -                | -         |    -0.05 | CacaNito, CYPHER, nawwk, nexa, pr1metapz |
|            7 |     3309 | 2025-06-22 | Inner Circle | L   | 0.305      | -            | -                | -                | -         |    -0.29 | CacaNito, CYPHER, nawwk, nexa, pr1metapz |
|            6 |     3316 | 2025-06-21 | The Glecs    | W   | 0.301      | 0.435        | 0.000 (0.000)    | 0.279 (0.036)    | 0 (0.000) |     3.91 | CacaNito, CYPHER, nawwk, nexa, pr1metapz |
|            5 |     3324 | 2025-06-21 | BIG          | W   | 0.299      | 0.480        | 0.021 (0.003)    | 0.191 (0.027)    | 0 (0.000) |     7.10 | CacaNito, CYPHER, nawwk, nexa, pr1metapz |
|            4 |     3365 | 2025-06-18 | Partizan     | W   | 0.280      | 0.480        | 0.029 (0.004)    | 0.987 (0.133)    | 0 (0.000) |     8.27 | CacaNito, CYPHER, nawwk, nexa, pr1metapz |
|            3 |     3689 | 2025-05-30 | Passion UA   | L   | 0.153      | -            | -                | -                | -         |    -0.99 | CacaNito, CYPHER, nawwk, nexa, pr1metapz |
|            2 |     3842 | 2025-05-20 | FaZe         | L   | 0.086      | -            | -                | -                | -         |    -0.56 | CacaNito, CYPHER, nawwk, nexa, pr1metapz |
|            1 |     3863 | 2025-05-19 | MOUZ         | L   | 0.081      | -            | -                | -                | -         |    -0.01 | CacaNito, CYPHER, nawwk, nexa, pr1metapz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,650.63)
- Divide that value by the 5th highest value among all rosters ($619,318.60)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-06-24 |      0.319 | $1,500.00      | $478.79         |
| 2025-06-22 |      0.307 | $5,500.00      | $1,686.44       |
| 2025-05-25 |      0.121 | $4,000.00      | $485.41         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
