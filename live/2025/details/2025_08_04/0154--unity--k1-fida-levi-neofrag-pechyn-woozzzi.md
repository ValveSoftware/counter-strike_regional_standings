### Roster Details<br />
Team Name: UNiTY<br />
Roster: K1-FiDa, Levi, NEOFRAG, Pechyn, woozzzi<br />
Global Rank: [154](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_04.md)<br />
Regional Rank: [88]( ../../standings_europe_2025_08_04.md)<br />
<br />
Final Rank Value:  666.2<br />
<br />
Final Rank Value (666.2) = Starting Rank Value (660.8) + Head To Head Adjustments (5.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.248[<sup>1</sup>](#table2)
- Bounty Collected: 0.250[<sup>2</sup>](#table1)
- Opponent Network: 0.009[<sup>2</sup>](#table1)
- LAN Wins: 0.043[<sup>2</sup>](#table1)

The average of these factors is 0.138<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 660.8
- 400 + ( ( 0.138 - 0.000 ) / ( 0.845 - 0.000 ) ) * 1600 = 660.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     2160 | 2025-04-06 | ECLOT        | L   | 0.399      | -            | -                | -                | -         |    -2.30 | K1-FiDa, Levi, NEOFRAG, Pechyn, woozzzi |
|            4 |     2176 | 2025-04-05 | SINNERS      | L   | 0.394      | -            | -                | -                | -         |    -2.40 | K1-FiDa, Levi, NEOFRAG, Pechyn, woozzzi |
|            3 |     2196 | 2025-04-04 | ECLOT        | W   | 0.387      | 0.321        | 0.081 (0.010)    | 0.761 (0.094)    | 1 (0.387) |    10.09 | K1-FiDa, Levi, NEOFRAG, Pechyn, woozzzi |
|            2 |     4084 | 2025-02-08 | Iberian Soul | L   | 0.019      | -            | -                | -                | -         |    -0.01 | K1-FiDa, Levi, NEOFRAG, Pechyn, woozzzi |
|            1 |     4162 | 2025-02-05 | Sangal       | L   | 0.000      | -            | -                | -                | -         |    -0.00 | K1-FiDa, Levi, NEOFRAG, Pechyn, woozzzi |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($410.16)
- Divide that value by the 5th highest value among all rosters ($440,967.54)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-04-06 |      0.400 | $1,025.00      | $410.16         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
