### Roster Details<br />
Team Name: BC.Game<br />
Roster: CacaNito, CYPHER, nawwk, nexa, pr1metapz<br />
Global Rank: [208](../../standings_global_2025_12_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_12_01.md)<br />
Regional Rank: [128]( ../../standings_europe_2025_12_01.md)<br />
<br />
Final Rank Value:  627.0<br />
<br />
Final Rank Value (627.0) = Starting Rank Value (620.7) + Head To Head Adjustments (6.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.261[<sup>1</sup>](#table2)
- Bounty Collected: 0.199[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.116<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 620.7
- 400 + ( ( 0.116 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 620.7


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
|            5 |     4326 | 2025-06-22 | Gentle Mates | L   | 0.120      | -            | -                | -                | -         |    -0.02 | CacaNito, CYPHER, nawwk, nexa, pr1metapz |
|            4 |     4330 | 2025-06-22 | Inner Circle | L   | 0.119      | -            | -                | -                | -         |    -0.03 | CacaNito, CYPHER, nawwk, nexa, pr1metapz |
|            3 |     4337 | 2025-06-21 | The Glecs    | W   | 0.114      | 0.435        | 0.000 (0.000)    | 0.204 (0.010)    | 0 (0.000) |     1.65 | CacaNito, CYPHER, nawwk, nexa, pr1metapz |
|            2 |     4345 | 2025-06-21 | BIG          | W   | 0.112      | 0.480        | 0.011 (0.001)    | 0.111 (0.006)    | 0 (0.000) |     2.54 | CacaNito, CYPHER, nawwk, nexa, pr1metapz |
|            1 |     4386 | 2025-06-18 | Partizan     | W   | 0.094      | 0.480        | 0.008 (0.000)    | 0.302 (0.014)    | 0 (0.000) |     2.12 | CacaNito, CYPHER, nawwk, nexa, pr1metapz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($858.69)
- Divide that value by the 5th highest value among all rosters ($574,782.45)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-06-24 |      0.133 | $1,500.00      | $198.82         |
| 2025-06-22 |      0.120 | $5,500.00      | $659.88         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
