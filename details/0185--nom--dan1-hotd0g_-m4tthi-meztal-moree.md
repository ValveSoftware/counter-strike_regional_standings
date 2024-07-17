### Roster Details<br />
Team Name: NOM<br />
Roster: dan1, hotd0g , m4tthi, meztal, MOREE<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [185](../standings_global.md)<br />
Regional Rank: [118]( ../standings_europe.md)<br />
Final Rank Value:  575.2<br />
<br />
Final Rank Value (575.2) = Starting Rank Value (533.3) + Head To Head Adjustments (41.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.235[<sup>2</sup>](#table1)
- Opponent Network: 0.014[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.062<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 533.3
- 400 + ( ( 0.062 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 533.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |     1283 | 2024-05-18 | GUN5            | L   | 0.801      | -            | -                | -                | -         |    -2.17 | dan1, hotd0g , m4tthi, meztal, MOREE  |
|            9 |     1319 | 2024-05-17 | Rare Atom       | W   | 0.794      | 0.143        | 0.000 (0.000)    | 0.372 (0.042)    | 0 (0.000) |    16.36 | dan1, hotd0g , m4tthi, meztal, MOREE  |
|            8 |     1480 | 2024-05-14 | Heimo           | W   | 0.772      | 0.143        | 0.009 (0.001)    | 0.058 (0.006)    | 0 (0.000) |    17.60 | dan1, hotd0g , m4tthi, meztal, MOREE  |
|            7 |     1500 | 2024-05-13 | Rare Atom       | L   | 0.765      | -            | -                | -                | -         |    -7.47 | dan1, hotd0g , m4tthi, meztal, MOREE  |
|            6 |     2037 | 2024-04-19 | JANO            | L   | 0.607      | -            | -                | -                | -         |    -5.62 | dan1, hotd0g , m4tthi, meztal, MOREE  |
|            5 |     2090 | 2024-04-18 | RUBY            | L   | 0.600      | -            | -                | -                | -         |    -1.42 | dan1, hotd0g , m4tthi, meztal, MOREE  |
|            4 |     2126 | 2024-04-17 | Sampi           | W   | 0.593      | 0.143        | 0.045 (0.004)    | 0.975 (0.083)    | 0 (0.000) |    17.25 | dan1, hotd0g , m4tthi, meztal, MOREE  |
|            3 |     2482 | 2024-04-04 | KOI             | L   | 0.507      | -            | -                | -                | -         |    -0.44 | dan1, meztal, MOREE, shushan, tN1R    |
|            2 |     2984 | 2024-03-11 | MOUZ NXT        | L   | 0.345      | -            | -                | -                | -         |    -0.46 | dan1, Libido, meztal, MOREE, ultimate |
|            1 |     3025 | 2024-03-09 | Astralis Talent | W   | 0.333      | 0.303        | 0.006 (0.001)    | 0.069 (0.007)    | 0 (0.000) |     8.20 | dan1, Libido, meztal, MOREE, ultimate |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
