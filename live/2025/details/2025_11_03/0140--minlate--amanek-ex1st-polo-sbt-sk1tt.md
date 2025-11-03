### Roster Details<br />
Team Name: MINLATE<br />
Roster: amanek, ex1st, POLO, SBT, sk1tt<br />
Global Rank: [140](../../standings_global_2025_11_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_11_03.md)<br />
Regional Rank: [92]( ../../standings_europe_2025_11_03.md)<br />
<br />
Final Rank Value:  725.6<br />
<br />
Final Rank Value (725.6) = Starting Rank Value (726.7) + Head To Head Adjustments (-1.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.275[<sup>1</sup>](#table2)
- Bounty Collected: 0.212[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.203[<sup>2</sup>](#table1)

The average of these factors is 0.174<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 726.7
- 400 + ( ( 0.174 - 0.000 ) / ( 0.853 - 0.000 ) ) * 1600 = 726.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |        3 | 2025-11-02 | Nemesis      | L   | 1.000      | -            | -                | -                | -         |    -8.88 | amanek, ex1st, POLO, SBT, sk1tt |
|            5 |       19 | 2025-11-01 | Prestige     | W   | 1.000      | 0.309        | 0.001 (0.000)    | 0.040 (0.012)    | 1 (1.000) |    13.18 | amanek, ex1st, POLO, SBT, sk1tt |
|            4 |       25 | 2025-11-01 | Nemesis      | W   | 1.000      | 0.309        | 0.005 (0.002)    | 0.199 (0.062)    | 1 (1.000) |    22.76 | amanek, ex1st, POLO, SBT, sk1tt |
|            3 |     1399 | 2025-09-16 | KHAN         | L   | 0.880      | -            | -                | -                | -         |   -12.34 | amanek, ex1st, POLO, SBT, sk1tt |
|            2 |     1467 | 2025-09-14 | CPH Wolves   | L   | 0.866      | -            | -                | -                | -         |    -8.20 | amanek, ex1st, POLO, SBT, sk1tt |
|            1 |     1517 | 2025-09-13 | FORZE Reload | L   | 0.860      | -            | -                | -                | -         |    -7.61 | amanek, ex1st, POLO, SBT, sk1tt |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,447.00)
- Divide that value by the 5th highest value among all rosters ($619,318.60)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-11-02 |      1.000 | $1,447.00      | $1,447.00       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
